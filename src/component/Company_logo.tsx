import Image from "next/image"


export default function Company_logo() {
    return (
        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-orange-500">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="8" r="3.5" fill="white" />
                {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => (
                    <line
                        key={i}
                        x1="8"
                        y1="8"
                        x2={8 + 6.5 * Math.cos((deg * Math.PI) / 180)}
                        y2={8 + 6.5 * Math.sin((deg * Math.PI) / 180)}
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                    />
                ))}
            </svg>
        </span>
    )
}