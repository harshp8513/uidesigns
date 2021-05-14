import { TriangleDownIcon, TriangleUpIcon } from '@chakra-ui/icons'
import { Box } from '@chakra-ui/layout'
import { SimpleGrid } from '@chakra-ui/layout'
import { Select } from '@chakra-ui/select'
import { useEffect, useState } from 'react'
import "./style.css"

function Head() {
    return (
        <SimpleGrid>
            <Box className="_box">
                <Box className="_box-select">
                    <Select
                        className="_select"
                        placeholder="Select option"
                        size="md"
                        icon={<TriangleDownIcon />}
                        iconSize={"12px"}
                        iconColor="#8a8a8a">

                        <option value="option1">Awesome Company Pvt Ltd</option>
                        <option value="option2">Young and Dangerous</option>
                        <option value="option3">Total Produce pty Ltd</option>
                        <option value="option3">Hospo Boys</option>
                    </Select>
                </Box>
            </Box>
        </SimpleGrid>
    )
}

export default Head