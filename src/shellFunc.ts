export default `
cds() {
  local res
  local dest
  res="$(cds-cli "$@")" || return
  if [[ "\${res:0:1}" == "E" ]]; then
    echo "$res" >&2
    return 1
  fi
  dest="\${res:1}"
  cd -- "$(eval echo "$dest")" || return 1
}
`.trim();
