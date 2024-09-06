import { useState } from "react"

interface Props{
    children: string,
    maxLength?: number
}

const ExpandableText = ({children, maxLength = 100}: Props) => {
    const [isExpanded, setIsExpanded] = useState(false)

    if (children.length <= maxLength) return <div>{children}</div>

    const text = isExpanded ? children : children.substr(0, maxLength) + '...'

    // const handleClick = () => {
    //     setIsExpanded(!isExpanded)
    // }

  return (
    <div>
        {text}
        <button>{isExpanded ? 'Less' : 'More'}</button>
    </div>
  )
}

export default ExpandableText