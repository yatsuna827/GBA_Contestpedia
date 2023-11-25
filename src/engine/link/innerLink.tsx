import { FileRoute } from '../route'
import { useInnerLink } from './useInnerLink'

type InnerLinkProps = {
  to: Pick<FileRoute, 'key'>
  fragment?: string
  children?: React.ReactNode
} & Omit<JSX.IntrinsicElements['a'], 'href'>
export const InnerLink: React.FC<InnerLinkProps> = ({ to, fragment, children, ...options }) => {
  const relativePath = useInnerLink(to)

  return (
    <a {...options} href={fragment != null ? `${relativePath}#${fragment}` : relativePath}>
      {children}
    </a>
  )
}
