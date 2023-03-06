export function passwordValidator(password) {
  if (!password) return "กรุณาระบุรหัสผ่าน"
  if (password.length < 5) return 'รหัสผ่านไม่ถูกต้อง'
  return ''
}
