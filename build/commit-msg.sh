#!/usr/bin/env bash

## ^\[M176069-\d+\]]\[[\u4E00-\u9FA5]+(\s\&\s([\u4E00-\u9FA5]+))*\]\s
commit_msg=cat
commit_regex='^(\[((#[0-9]+)|(TECH))\]\[\S+(\s\&\s\S+)*\]|merge)\s'
error_msg="Aborting commit. Commit message must like '[#100][greengerong] commit message' or '[TECH][greengerong] commit message'"
echo "------------"
echo $1
echo $commit_regex
echo "------------"
if ! grep -iqE "$commit_regex" "$1"; then
  echo "$error_msg" >&2
  exit 1
fi
