import { Box, List, ListItem, Text } from '@chakra-ui/layout';
import { FC, SyntheticEvent, useState } from 'react'

interface Prpos {
    Options: any[]
    onSelectChange: (value: any) => void
}

const CustomSelect: FC<Prpos> = (props) => {
    const { Options, onSelectChange } = props
    const [toggle, setToggle] = useState(false);
    const [selected, setSelected] = useState(Options[0])
    const handleSelect = (e: SyntheticEvent) => {
        const value: any = e.currentTarget.innerHTML;
        setSelected(e.currentTarget.innerHTML)
        onSelectChange(value);
        setToggle(false);
    }
    return (
        <Box d="flex" pos="relative" flexDirection="column">
            <Text onClick={() => setToggle(!toggle)}
                border="1px solid #ccc"
                padding="8px 10px"
                position="relative"
                cursor="pointer"
                whiteSpace="nowrap"
                paddingRight="35px"
                overflow="hidden"
                borderRadius="5px"
                backgroundColor="#f3f3f3"
                fontSize="15px"
                fontWeight="500"
                textOverflow="ellipsis"
                _after={{
                    position: "absolute",
                    content: `""`,
                    height: 0,
                    width: 0,
                    borderStyle: "solid",
                    borderWidth: "6px",
                    borderColor: "#999 transparent transparent",
                    right: "10px",
                    top: "16px",
                }}
            > {selected}
            </Text>
            <List style={!toggle ? { display: "none" } : {}}
                listStyle="none"
                padding="10px"
                background="#fff"
                border="1px solid #eee"
                marginTop="10px"
                boxShadow="0px 0px 5px #ddd"
                position="absolute"
                width="100%"
                top="100%"
                border-radius="3px"
            >
                {
                    Options.map((option, index) => {
                        if (option !== selected)
                            return <ListItem
                                fontSize="14px"
                                marginTop="10px"
                                marginBottom="15px"
                                fontFamily="Montserrat,sans-serif"
                                fontWeight="500"
                                cursor=" pointer"
                                onClick={handleSelect} key={index}>{option}</ListItem>
                    })
                }
            </List>
        </Box >
    )
}

export default CustomSelect