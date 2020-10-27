#!/bin/sh

rm -rf src/@types/__generated__/*

npx apollo client:codegen \
--config="apollo.config.js" \
--endpoint="http://localhost:8000/___graphql" \
--target="typescript" \
--tsFileExtension="d.ts" \
--useReadOnlyTypes \
--no-addTypename \
--mergeInFieldsFromFragmentSpreads \
--outputFlat="src/@types/__generated__/"
