const Play = ({...props}) => {
    return (
        <>
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_b_4415_10402)">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48ZM20.25 32.8033L33.75 25.2576C34.75 24.6987 34.75 23.3013 33.75 22.7424L20.25 15.1967C19.25 14.6378 18 15.3365 18 16.4543V31.5457C18 32.6635 19.25 33.3622 20.25 32.8033Z" fill="white" fill-opacity="0.3"/>
                </g>
                <defs>
                    <filter id="filter0_b_4415_10402" x="-16" y="-16" width="80" height="80" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feGaussianBlur in="BackgroundImageFix" stdDeviation="8"/>
                        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_4415_10402"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_4415_10402" result="shape"/>
                    </filter>
                </defs>
            </svg>
        </>
    )
}

export default Play;