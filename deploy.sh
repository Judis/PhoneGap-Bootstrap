#!/bin/bash
EMAIL="your_adobe_id_email"
PASSWORD="your_adobe_id_password"
APP_ID="phonegap_build_application_id"
TF_API_TOKEN="test_flight_api_token"
TF_TEAM_TOKEN="test_flight_team_token"
TFAIRY_API_KEY="testfairy_api_key"

case "$1" in
  build)
    zip -r build www
    curl -u $EMAIL:$PASSWORD -X PUT -F file=@./build.zip https://build.phonegap.com/api/v1/apps/$APP_ID
    ;;

  status)
    curl -s -u $EMAIL:$PASSWORD https://build.phonegap.com/api/v1/apps/$APP_ID | grep -o '"status":{[[a-zA-Z":,.]*}'
    ;;

  build_and_publish)
    case "$2" in
      ios)
        platforms=(ios)
        ;;
      android)
        platforms=(android)
        ;;
      both)
        platforms=(android ios)
        ;;
      *)
        echo $"Usage: $0 $1 {ios|android|both}"
        exit 1
    esac

    ./deploy.sh build
    for platform in ${platforms[*]}
    do
      ./deploy.sh check_and_publish $platform
    done
    ;;

  check_and_publish)
    case "$2" in
      ios)
        platform=ios
        ;;
      android)
        platform=android
        ;;
      *)
        echo $"Usage: $0 $1 {ios|android}"
        exit 1
    esac
    echo
    echo "Deploying to $platform"
    while [[ true ]]; do
      output=`./deploy.sh status`
      echo $output | grep \"$platform\":\"complete\" && break || echo $output && sleep 5;
    done
    ./deploy.sh publish $platform
    ;;

  publish)
    case "$2" in
      ios)
        curl -Lu $EMAIL:$PASSWORD https://build.phonegap.com/api/v1/apps/$APP_ID/ios > app.ipa
        curl -X POST http://testflightapp.com/api/builds.json \
        -F file=@app.ipa \
        -F api_token=$TF_API_TOKEN \
        -F team_token=$TF_TEAM_TOKEN \
        -F notes='This build was uploaded via the upload API' \
        -F notify=True \
        -F distribution_lists='all'
        ;;
      android)
        curl -Lu $EMAIL:$PASSWORD https://build.phonegap.com/api/v1/apps/$APP_ID/android > app.apk
        curl https://app.testfairy.com/api/upload \
        -F api_key=$TFAIRY_API_KEY \
        -F apk_file=@app.apk \
        -F metrics='cpu,memory,network,logcat' \
        -F testers_groups='Developers'
        ;;
      *)
        echo $"Usage: $0 $1 {ios|android}"
    esac
    ;;

  *)
    echo $"Usage: $0 {build|status|publish}"
    exit 1
esac