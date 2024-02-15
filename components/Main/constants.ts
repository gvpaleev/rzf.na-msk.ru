import { Colors } from './types'

const headerCommonClasses =
  'w-full h-24 flex justify-between items-center px-10 lg:rounded-t-2xl'

export const HEADER: Record<Colors, string> = {
  [Colors.GREEN]: `bg-success ${headerCommonClasses}`,
  [Colors.BLUE]: `bg-info ${headerCommonClasses}`,
  [Colors.RED]: `bg-secondary ${headerCommonClasses}`,
}

const contentCommonClasses = 'w-full h-full p-5 sm:p-10'
export const CONTENT: Record<Colors, string> = {
  [Colors.GREEN]: `bg-success/10 ${contentCommonClasses}`,
  [Colors.BLUE]: `bg-info/10 ${contentCommonClasses}`,
  [Colors.RED]: `bg-secondary/10 ${contentCommonClasses}`,
}
