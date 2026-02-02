#!/bin/bash

cds() {
  eval "$(bun run . "$@")"
}

export -f cds
