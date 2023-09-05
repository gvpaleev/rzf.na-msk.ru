import { Colors } from './types'

const headerCommonClasses =
  'w-full h-36 flex justify-between items-center px-10 lg:rounded-t-2xl'

export const HEADER: Record<Colors, string> = {
  [Colors.GREEN]: `bg-green-500 ${headerCommonClasses}`,
  [Colors.BLUE]: `bg-blue-500 ${headerCommonClasses}`,
  [Colors.RED]: `bg-pink-500 ${headerCommonClasses}`,
}

const contentCommonClasses = 'w-full h-full p-10'
export const CONTENT: Record<Colors, string> = {
  [Colors.GREEN]: `bg-green-100 ${contentCommonClasses}`,
  [Colors.BLUE]: `bg-blue-100 ${contentCommonClasses}`,
  [Colors.RED]: `bg-pink-100 ${contentCommonClasses}`,
}
