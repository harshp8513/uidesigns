import { TriangleDownIcon } from '@chakra-ui/icons';
import styled from '@emotion/styled';
import React, { FC, SyntheticEvent, useState } from 'react'

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
        <SelectWrap>
            <SelectTitle onClick={() => setToggle(!toggle)}>{selected}
            </SelectTitle>
            <SelectList style={!toggle ? { display: "none" } : {}}>
                {
                    Options.map((option, index) => {
                        if (option !== selected)
                            return <Option onClick={handleSelect} key={index}>{option}</Option>
                    })
                }
            </SelectList>
        </SelectWrap>
    )
}

export default CustomSelect



const SelectWrap = styled.div`
    display: flex;
    flex-direction: column;
    position: relative; `

const SelectIcon = styled.div``

const SelectTitle = styled.p`
    border: 1px solid #ccc;
    padding: 8px 10px;
    position: relative;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding-right: 35px;
    overflow: hidden;
    border-radius: 5px;
    background-color: #f3f3f3;
    cursor: pointer;
    font-size: 15px;
    font-weight: 500;
    &:after {
        position: absolute;
        content: "";
        height: 0;
        width: 0;
        border-style: solid;
        border-width: 6px;
        border-color: #999 transparent transparent;
        right: 10px;
        top: 16px;
    }`

const SelectList = styled.ul`
    list-style: none;
    padding: 10px;
    background: #fff;
    border: 1px solid #eee;
    margin-top: 10px;
    box-shadow: 0px 0px 5px #ddd;
    position: absolute;
    width: 100%;
    top: 100%;
    border-radius: 3px; `

const Option = styled.li`
    font-size: 14px;
    margin-top: 10px;
    margin-bottom: 15px;
    font-family: "Montserrat", sans-serif;
    font-weight: 500;
    cursor: pointer;`