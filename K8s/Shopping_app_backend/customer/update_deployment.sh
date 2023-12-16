#!/bin/sh
sed -i "s#image: registry.gitlab.com/dostream1/application/backend/customer:main-1.2.1#        image: registry.gitlab.com/dostream1/application/backend/customer:$CI_COMMIT_REF_NAME-$IMAGE_VERSION#" ./k8s/deployment.yaml
