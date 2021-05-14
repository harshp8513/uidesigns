import { Box } from '@chakra-ui/layout'
import { SimpleGrid } from '@chakra-ui/layout'
import { useMediaQuery } from '@chakra-ui/media-query'
import { CustomSelect } from '../common'

function Head() {
    const [isMobile] = useMediaQuery("(min-width: 600px)")
    const Options = ['Awesome Company Pvt Ltd', 'Young and Dangerous', 'Total Produce pty Ltd', 'Hospo Boys']
    const handleSelect = (value: any) => {
        console.log(value)
    }

    const BoxStyle = {
        d: "flex",
        bg: "#fff",
        w: "100%",
        h: "70px",
        alignItems: "center",
        justifyContent: !isMobile ? "center" : "flex-end",
        padding: "0 50px",
        borderBottom:"2px solid #ececec"
    }

    return (
        <SimpleGrid>
            <Box {...BoxStyle} >
                <Box w="230px">
                    <CustomSelect
                        Options={Options}
                        onSelectChange={handleSelect} />
                </Box>
            </Box>
        </SimpleGrid>
    )
}

export default Head