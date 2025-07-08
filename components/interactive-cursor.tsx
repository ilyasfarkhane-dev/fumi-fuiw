"use client"

import { useEffect, useRef, useState } from "react"

const CURSOR_COLOR = "#c7b9a7" // Beige color for all backgrounds
const CURSOR_BORDER = "rgba(199, 185, 167, 0.6)" // 60% opacity
const CURSOR_BORDER_HOVER = "rgba(199, 185, 167, 0.8)" // 80% opacity
const CURSOR_FILL_134F4B = "#134f4b"

export default function InteractiveCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const circleRef = useRef<HTMLDivElement>(null)
  const [hovering, setHovering] = useState(false)
  const [clicking, setClicking] = useState(false)
  const [fillColor, setFillColor] = useState<string>("transparent")
  const mouse = useRef({ x: 0, y: 0 })

  // Mouse event listeners
  useEffect(() => {
    const move = (e: MouseEvent) => {
      const x = e.clientX
      const y = e.clientY
      mouse.current = { x, y }
      
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${x - 6}px, ${y - 6}px, 0)`
      }
      if (circleRef.current) {
        const size = hovering ? 80 : 40
        circleRef.current.style.transform = `translate3d(${x - size/2}px, ${y - size/2}px, 0)`
      }
    }
    const down = () => setClicking(true)
    const up = () => setClicking(false)
    window.addEventListener("mousemove", move)
    window.addEventListener("mousedown", down)
    window.addEventListener("mouseup", up)
    return () => {
      window.removeEventListener("mousemove", move)
      window.removeEventListener("mousedown", down)
      window.removeEventListener("mouseup", up)
    }
  }, [hovering])

  // Hover detection for buttons, links, and .cursor-hover
  useEffect(() => {
    const isHoverTarget = (el: Element | null) => {
      if (!el) return false
      if (
        el.tagName === "BUTTON" ||
        el.tagName === "A" ||
        el.classList.contains("cursor-hover")
      ) return true
      return false
    }
    const getFillColor = (el: Element | null) => {
      if (!el) return "transparent"
      if (el.classList.contains("cursor-fill-134f4b")) return CURSOR_FILL_134F4B
      return "transparent"
    }
    const onMouseOver = (e: MouseEvent) => {
      let el = e.target as Element | null
      while (el && el !== document.body) {
        if (isHoverTarget(el)) {
          setHovering(true)
          setFillColor(getFillColor(el))
          return
        }
        el = el.parentElement
      }
      setHovering(false)
      setFillColor("transparent")
    }
    const onMouseOut = (e: MouseEvent) => {
      setHovering(false)
      setFillColor("transparent")
    }
    document.addEventListener("mouseover", onMouseOver)
    document.addEventListener("mouseout", onMouseOut)
    return () => {
      document.removeEventListener("mouseover", onMouseOver)
      document.removeEventListener("mouseout", onMouseOut)
    }
  }, [])

  // Styling
  const dotStyle: React.CSSProperties = {
    position: "fixed",
    top: 0,
    left: 0,
    width: 12,
    height: 12,
    borderRadius: "50%",
    background: CURSOR_COLOR,
    opacity: 1,
    zIndex: 9999,
    pointerEvents: "none",
    transition: clicking ? "transform 150ms cubic-bezier(.4,0,.2,1)" : undefined,
    transform: "translate3d(-9999px, -9999px, 0)",
    willChange: "transform",
    boxShadow: "0 0 6px 0 rgba(199, 185, 167, 0.3)",
    ...(clicking ? { transform: "scale(0.8)" } : {})
  }
  const circleStyle: React.CSSProperties = {
    position: "fixed",
    top: 0,
    left: 0,
    width: hovering ? 80 : 40,
    height: hovering ? 80 : 40,
    borderRadius: "50%",
    border: `2.5px solid ${hovering ? CURSOR_BORDER_HOVER : CURSOR_BORDER}`,
    background: fillColor,
    zIndex: 9998,
    pointerEvents: "none",
    transition: `width 300ms cubic-bezier(.4,0,.2,1), height 300ms cubic-bezier(.4,0,.2,1), border-color 300ms${clicking ? ', transform 150ms cubic-bezier(.4,0,.2,1)' : ''}`,
    opacity: hovering ? 0.8 : 0.6,
    transform: "translate3d(-9999px, -9999px, 0)",
    willChange: "transform,width,height,opacity,border-color",
    ...(clicking ? { transform: "scale(0.92)" } : {})
  }

  return (
    <>
      <div ref={circleRef} style={circleStyle} />
      <div ref={dotRef} style={dotStyle} />
    </>
  )
}
