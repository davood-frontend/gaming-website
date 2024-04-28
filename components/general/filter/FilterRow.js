'use client'
import React from "react";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { Chip, Typography } from "@mui/material";
import styles from '@/styles/games/Main.module.css'

const FilterRow = ({ data, selectedData, checkOption }) => {


    return (
        <FormControl
            className={styles.topFadeBorder}
            sx={{
                px: { xs: 0, sm: 1.5 },
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                alignItems: "center",
            }}
        >
            <FormLabel >
                <Typography sx={{ typography: { xs: 'caption', md: 'body1' } }}>
                    {data.category} :
                </Typography>
            </FormLabel>
            <RadioGroup
                sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap", mb: 1 }}
            >
                {data.list.map((radioOption, index) => {
                    return (
                        <FormControlLabel
                            key={index}
                            sx={{ '&.MuiFormControlLabel-root ': { margin: 0, marginLeft: { xs: 0.8, md: 1 }, mt: { xs: 1, md: 0 } } }}
                            control={
                                <Chip
                                    color={selectedData === radioOption.value ? "secondary" : 'default'}
                                    label={radioOption.label}
                                    variant='outlined'
                                    sx={{ display: 'flex', alignItems: 'center', mx: { xs: 0, md: 0.5 }, fontSize: { xs: 10, md: 12 } }}
                                    onClick={() => checkOption({ name: data.name, value: radioOption.value })}
                                    size={'medium'}
                                />
                            }
                        />
                    );
                })}
            </RadioGroup>
        </FormControl>
    );
}
export default FilterRow;