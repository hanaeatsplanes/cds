(return 0 2>/dev/null) || {
  echo "source this file, don't run it!"
  exit 1
}

cds() {
  eval "$(bun run ~/Documents/projects/cds "$@")"
}

export -f cds
