export function emailValidator(email) {
  const re = /\S+@\S+\.\S+/
  if (!email) return "กรุณาระบุอีเมล"
  if (!re.test(email)) return 'รูปแบบอีเมลไม่ถูกต้อง'
  return ''
}
