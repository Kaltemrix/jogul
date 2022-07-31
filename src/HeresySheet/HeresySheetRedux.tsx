import { Accordion, AccordionDetails, AccordionSummary, Avatar, Container, Grid, SvgIcon, Typography, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import { FC, useCallback, useMemo } from "react";
import { BoxProps, styled } from "@mui/material";
import ClericImage from "./../img/Cleric.jpeg"
import Aquila from "./../img/aquila.svg"
import { CharacteristicKey, Experience, HeresySheetStats, Skill, Skills, Talent } from "./types";
import { jogulStats } from "./characters/jogul";
import { startCase } from "lodash";

export const Card = styled('div', {
    shouldForwardProp: (prop) => prop !== "direction"
})<{direction: "left" |"center"|"right"}>(({ direction, theme }) => ({
    display: "flex",
    flexDirection: "column",
    padding: theme.spacing(2,2,2,2),
    // alignItems: direction,
    textAlign: direction,
    width: "100%",
    height: "100%"
}));

export const HeroImage = styled('img', {
    shouldForwardProp: (prop) => prop !== "image"
})<{    image?: string;}>(({ image, theme }) => ({
    width: "100%",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    border: "1px solid black",
    padding: theme.spacing(1),
    borderRadius: "500px 500px 0px 0px"
})); 

const getSkillLevel = (stats: HeresySheetStats, skill?: Skill) => {
    if(!skill) {
        return "Bad Skill"
    };
    const relevanctCharacteristic = Object.values(stats.characteristics).find(x => x.shortHand === skill.type);
    let value ;
    switch(skill.level) {
        case "+0":
            value = relevanctCharacteristic?.value || 0;
            break;
        case "+10":
            value = (relevanctCharacteristic?.value || 0) + 10;
            break;
        case "+20":
            value = (relevanctCharacteristic?.value || 0) + 20;
            break;
        case "Half":
            value = Math.floor((relevanctCharacteristic?.value || 0) / 2);
            break;
        default:
            value = 0;
            break;
    }

    return "Roll against: " + value;
}


interface HeresySheetReduxProps {
    name?: string
}

const HeresySheetRedux: FC<HeresySheetReduxProps> = ({
    name
}) => {
    const characterStats = useMemo(() => {
        switch (name) {
            case "jogul":
            default:
                return jogulStats
        } 
    }, [name])

    const renderSkills = useCallback((skills: Skills) => {
        return Object.keys(skills).map(x => {
            const skill = skills[x as keyof Skills]
            if(skill?.subTypes) {
                return skill.subTypes.map(subType => (
                    <Typography 
                        key={x + subType}
                        variant="body1"
                    >
                        {startCase(x)} ({subType}) ({skill.type}): {getSkillLevel(characterStats, skill)}
                    </Typography>  
                ))
            }
            return (                        
                <Typography 
                    key={x}
                    variant="body1"
                >
                    {startCase(x)} ({skill?.type}): {getSkillLevel(characterStats, skill)}
                </Typography>  
            )
        })
    }, [characterStats])

    const renderTalents = useCallback((talents: Talent[]) => {
        return talents.map(({label, values}) => (
            <>
                <Typography variant="body2" color="gray">{label}</Typography>
                <Typography variant="body2"gutterBottom>{values.join(", ")}</Typography>
            </>
        ))
    }, [])

    const renderExperience = useCallback((experience: Experience) => {
        const expSpent = experience.advancements.reduce((acc, curr) => acc += curr.cost, 0);
        const expRemaining = experience.total - expSpent;
        return (
            <>
                            <Typography variant="body2" color="gray">XP to Spend: {expRemaining}</Typography>
                            <Typography variant="body2" color="gray">XP Total: {experience.total}</Typography>

            </>
        )
    }, [])

    return (
        <Container maxWidth="lg">
            <Grid container spacing={4} display="flex" padding={4}>
                <Grid container paddingBottom={4} alignItems="center" paddingTop={2}>
                    <Grid item xs={3} display="flex" justifyContent="center">
                        <img style={{ width: "120px"}} src={Aquila} alt=""/>
                    </Grid>
                    <Grid item xs={6} display="flex" justifyContent="space-evenly">
                        <Typography variant="body1" color="gray">Burn</Typography>
                        <Typography variant="body1" color="gray">Them</Typography>
                        <Typography variant="body1" color="gray">Heretics</Typography>
                    </Grid>
                    <Grid item xs={3} display="flex" justifyContent="center">
                        <img style={{ width: "120px"}} src={Aquila} alt=""/>
                    </Grid>
                </Grid>
                <Grid  item xs={12} textAlign="center" paddingBottom={4}>
                    <Typography variant="h2">Jogul</Typography>
                </Grid>
                <Grid item xs={12} md={4}display="flex">
                    <Card direction="left">
                        <Typography variant="body1" color="gray" gutterBottom>CHARACTERISTICS</Typography>
                        <div style={{paddingBottom: "16px"}}>
                        {Object.keys(characterStats.characteristics).map(x => {
                            const char = characterStats.characteristics[x as CharacteristicKey]
                            return (                        
                                <Typography 
                                key={x}
                                variant="body1"
                                >
                                    {char.longHand}: {char.value}
                                </Typography>  
                            )
                        })}
                        </div>
                        <Typography variant="body1" color="gray" gutterBottom>ADVANCED SKILLS</Typography>
                        {renderSkills(characterStats.skills.advanced)}
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}display="flex">
                    <Card direction="center">
                        <HeroImage src={ClericImage}/>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}display="flex">
                    <Card direction="right">                        
                        <Typography variant="body1" color="gray" gutterBottom>BASIC SKILLS</Typography>
                        {renderSkills(characterStats.skills.basic)}
                    </Card>
                </Grid>
                <Grid item xs={12}>
                <Container maxWidth="md">
                    <Accordion sx={{ width: "100%"}}>
                        <AccordionSummary sx={{justifyContent: "center"}}>
                            <Typography variant="body1" color="gray">TRAITS AND TALENTS</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            {renderTalents(Object.values(characterStats.talents))}
                        </AccordionDetails>
                    </Accordion>
                    <Accordion sx={{ width: "100%"}}>
                        <AccordionSummary sx={{justifyContent: "center"}}>
                            <Typography variant="body1" color="gray">EXPERIENCE</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            {renderExperience(characterStats.experience)}
                        </AccordionDetails>
                    </Accordion>
                </Container>
                </Grid>
            </Grid>
        </Container>
    )
}

export default HeresySheetRedux;