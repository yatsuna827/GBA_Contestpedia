import type { FileRoute } from '../route'
import { useLink } from './useLink'

type InnerLinkProps = {
  to: Pick<FileRoute, 'key'>
  fragment?: string
  children?: React.ReactNode
} & Omit<JSX.IntrinsicElements['a'], 'href'>
export const InnerLink: React.FC<InnerLinkProps> = ({ to, fragment, children, ...options }) => {
  const relativePath = useLink(to)

  return (
    <a {...options} href={fragment != null ? `${relativePath}#${fragment}` : relativePath}>
      {children}
    </a>
  )
}
