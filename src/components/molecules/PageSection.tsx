import { ReactNode } from "react"

interface PageSectionProps {
    gridCols?: string;
    children: ReactNode;
    height?: string;
}


const PageSection = ({gridCols = "1fr" , children, height = "96"}: PageSectionProps ) => {

    return (
        <>
            <div className={`grid grid-cols-2 grid-rows-1 items-center justify-center
                bg-white/10 backdrop-blur-[3px] p-10 rounded-lg  w-3/4 min-h-${height}
                max-md:flex max-md:flex-col max-md:grid-cols-none
            `} style={{
                gridTemplateColumns: gridCols,
                gridTemplateRows: "1fr",
            }}>
                {
                    children
                }
            </div>
        </>
    )

}

export default PageSection