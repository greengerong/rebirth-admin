#!/usr/bin/env bash

## M176069-[0-9]+
commit_regex='^(\[((#[0-9]+)|(TECH))\]\[\S+(\s\&\s\S+)*\]|merge)\s'
error_msg='Aborting commit. Commit message must match "[#100][greengerong] commit message", "[TECH] commit message" or "Merge"'
if ! grep -iqE "$commit_regex" "$1"; then
  echo "$error_msg" >&2
  exit 1
fi
