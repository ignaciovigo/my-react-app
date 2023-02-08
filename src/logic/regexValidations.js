export const regexEmail = /^[.a-zA-Z0-9_-]+@(hotmail|yahoo|gmail|outlook)\.(?:com|cl|net|es|com)(\.ar|\.mx|\.us|\.co|\.cr|\.pe|\.uy|\.ve|\.ec|\.cl|\.bo|\.br)?$/gim
export const regexAddress = /^\d{1,6}\040([A-Z]{1}[a-z]{1,}\040[A-Z]{1}[a-z]{1,})$|^\d{1,6}\040([A-Z]{1}[a-z]{1,}\040[A-Z]{1}[a-z]{1,}\040[A-Z]{1}[a-z]{1,})$|^\d{1,6}\040([A-Z]{1}[a-z]{1,}\040[A-Z]{1}[a-z]{1,}\040[A-Z]{1}[a-z]{1,}\040[A-Z]{1}[a-z]{1,})$/gs
export const regexCity = /^[A-Z]{1}[a-z]{2,}(:?\s[A-Z]{1}[a-z]+)*$/gm
