"use client"

import { useEffect, useRef } from "react"

type AnimatedBackgroundProps = {
  className?: string
  lines?: number
  amplitude?: number
  speed?: number
  resolution?: number
  opacity?: number
  hueShift?: number
}

// All canvas logic is moved into this dedicated controller class.
class CanvasController {
  private canvas: HTMLCanvasElement
  private ctx: CanvasRenderingContext2D
  private props: Required<Omit<AnimatedBackgroundProps, "className">>

  private rafId: number | null = null
  private width = 0
  private height = 0
  private dpr = 1
  private colors = { primary: "", accent: "", fg: "" }
  private prefersReduced = false

  constructor(
    canvas: HTMLCanvasElement,
    props: Required<Omit<AnimatedBackgroundProps, "className">>
  ) {
    this.canvas = canvas
    const context = canvas.getContext("2d", { alpha: true })
    if (!context) {
      throw new Error("Failed to get 2D context")
    }
    this.ctx = context
    this.props = props
  }

  // A single public method to start everything.
  public init() {
    this.prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    this.dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1))
    this.colors = this.readThemeColors()

    window.addEventListener("resize", this.onResize)
    this.onResize() // Initial setup

    if (this.prefersReduced) {
      this.drawFrame(0)
    } else {
      this.animate()
    }
  }

  // A single public method to clean up.
  public cleanup() {
    window.removeEventListener("resize", this.onResize)
    if (this.rafId) {
      cancelAnimationFrame(this.rafId)
    }
  }

  private readThemeColors() {
    const styles = getComputedStyle(document.documentElement)
    const primary = styles.getPropertyValue("--color-primary")?.trim() || "hsl(0 72% 50%)"
    const accent = styles.getPropertyValue("--color-accent")?.trim() || "hsl(10 70% 55%)"
    const fg = styles.getPropertyValue("--color-foreground")?.trim() || "hsl(0 0% 10%)"
    return { primary, accent, fg }
  }

  // Use arrow function for 'this' context binding in event listeners.
  private onResize = () => {
    const parent = this.canvas.parentElement || document.body
    this.width = parent.clientWidth
    this.height = parent.clientHeight
    this.canvas.width = Math.floor(this.width * this.dpr)
    this.canvas.height = Math.floor(this.height * this.dpr)
    this.canvas.style.width = `${this.width}px`
    this.canvas.style.height = `${this.height}px`
    this.ctx.setTransform(this.dpr, 0, 0, this.dpr, 0, 0)

    if (this.prefersReduced) {
      this.drawFrame(0)
    }
  }

  private createGradient(): CanvasGradient {
    const grad = this.ctx.createLinearGradient(0, 0, this.width, 0)
    grad.addColorStop(0, this.colors.accent)
    grad.addColorStop(0.5, this.colors.primary)
    grad.addColorStop(1, this.colors.accent)
    return grad
  }

  private drawFrame = (t: number) => {
    const { lines, amplitude, speed, resolution, opacity } = this.props
    this.ctx.clearRect(0, 0, this.width, this.height)

    // Draw waves
    this.ctx.save()
    this.ctx.globalAlpha = opacity
    this.ctx.globalCompositeOperation = "lighter"
    this.ctx.lineWidth = 2
    this.ctx.strokeStyle = this.createGradient()
    const count = Math.max(4, lines)
    for (let i = 0; i < count; i++) {
      const yBase = ((i + 1) * this.height) / (count + 1)
      const phase = i * 0.45
      const amp = amplitude * (0.7 + 0.6 * Math.sin(0.7 * i + t * 0.25))
      const freq = 0.012 + (i % 3) * 0.0025
      this.ctx.beginPath()
      this.ctx.moveTo(-20, yBase)
      for (let x = 0; x <= this.width + 40; x += resolution) {
        const y =
          yBase +
          Math.sin(x * freq + t * speed + phase) * amp * 0.9 +
          Math.sin(x * (freq * 0.53) + t * (speed * 0.6) - phase) * amp * 0.35
        this.ctx.lineTo(x, y)
      }
      this.ctx.stroke()
    }
    this.ctx.restore()

    // Draw dot grid
    this.ctx.save()
    this.ctx.globalAlpha = Math.min(0.05, opacity * 0.5)
    this.ctx.fillStyle = this.colors.fg
    const step = 28
    const r = 1
    for (let y = step / 2; y < this.height; y += step) {
      for (let x = step / 2; x < this.width; x += step) {
        this.ctx.beginPath()
        this.ctx.arc(x, y, r, 0, Math.PI * 2)
        this.ctx.fill()
      }
    }
    this.ctx.restore()
  }

  private animate = (now = 0) => {
    const t = now / 1000 + this.props.hueShift * 0.01
    this.drawFrame(t)
    this.rafId = requestAnimationFrame(this.animate)
  }
}

export function AnimatedBackground({
  className = "",
  lines = 18,
  amplitude = 26,
  speed = 0.6,
  resolution = 6,
  opacity = 0.12,
  hueShift = 0,
}: AnimatedBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) {
      return // Exit if the canvas element is not yet available.
    }

    // Encapsulate all props into a single object for the controller.
    const animationProps = { lines, amplitude, speed, resolution, opacity, hueShift }

    // Create a new controller instance ONLY when we know the canvas exists.
    const controller = new CanvasController(canvas, animationProps)
    controller.init()

    // The cleanup function calls the controller's cleanup method.
    return () => {
      controller.cleanup()
    }
  }, [lines, amplitude, speed, resolution, opacity, hueShift])

  return (
    <div
      className={`pointer-events-none top-20 absolute inset-0 [mask-image:radial-gradient(120%_100%_at_50%_10%,#000_40%,transparent_100%)] ${className}`}
      aria-hidden="true"
    >
      <canvas ref={canvasRef} className="size-full" />
    </div>
  )
}