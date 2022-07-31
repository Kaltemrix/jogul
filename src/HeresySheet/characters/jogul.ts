import { HeresySheetStats } from "../types";

export const jogulStats: HeresySheetStats = {
    characteristics: {
        weapon:{ 
            value: 35,
            shortHand: "WS",
            longHand: "Weapon"
        },
        ballistic:{ 
            value: 42,
            shortHand: "BS",
            longHand: "Ballistic"
        },
        strength:{ 
            value: 30,
            shortHand: "Str",
            longHand: "Strength"
        },
        toughness:{ 
            value: 28,
            shortHand: "T",
            longHand: "Toughness"
        },
        agility:{ 
            value: 38,
            shortHand: "Ag",
            longHand: "Agility"
        },
        inteligence:{ 
            value: 34,
            shortHand: "Int",
            longHand: "Inteligence"
        },
        perception:{ 
            value: 37,
            shortHand: "Per",
            longHand: "Perception"
        },
        willPower:{ 
            value: 31,
            shortHand: "WP",
            longHand: "Will Power"
        },
        fellowship:{ 
            value: 36,
            shortHand: "Fel",
            longHand: "Fellowship"
        },
    },
    skills: {
        basic: {
            awareness: {
                type: "Per",
                level: "+10"
            },
            barter: {
                type: "Fel",
                level: "Half"
            },
            carouse: {
                type: "T",
                level: "Half"
            },
            charm: {
                type: "Fel",
                level: "Half"
            },
            climb: {
                type: "Str",
                level: "Half"
            },
            concealment: {
                type: "Ag",
                level: "Half"
            },
            contortionist: {
                type: "Ag",
                level: "Half"
            },
            deceive: {
                type: "Fel",
                level: "Half"
            },
            dodge: {
                type: "Ag",
                level: "+0"
            },
            evaluate: {
                type: "Int",
                level: "Half"
            },
            gamble: {
                type: "Int",
                level: "Half"
            },
            inquiry: {
                type: "Fel",
                level: "+10"
            },
            intimidate: {
                type: "Str",
                level: "Half"
            },
            logic: {
                type: "Int",
                level: "Half"
            },
            scrutiny: {
                type: "Per",
                level: "Half"
            },
            search: {
                type: "Per",
                level: "Half"
            },
            silentMove: {
                type: "Ag",
                level: "Half"
            },
            swim: {
                type: "Str",
                level: "Half"
            },
            techUse: {
                type: "Int",
                level: "Half"
            }
        },
        advanced: {
            speakLanguage: {
                type: "Int",
                level: "+0",
                subTypes: ["Low Gothic"]
            },
        }
    },
    talents: {
        meleeWeaponTraining: {
            label: "Melee Weapon Training",
            values: ["Primative"]
        },
        pistolWeaponTraining: {
            label: "Pistol Weapon Training",
            values: ["SP, Las"]
        },
        basicWeaponTraining: {
            label: "Basic Weapon Training",
            values: ["Primative, Las"]
        },
        accustomToCrowds: {
            label: "Accustom to Crowds",
            values: ["TBA"]
        },
        wary: {
            label: "Wary",
            values: ["+1 to Initative"]
        },
        rapidReload: {
            label: "Rapid Reload",
            values: ["Reloading takes half the amount of time"]
        },
        quickDraw: {
            label: "Quick Draw",
            values: ["Readying a weapon is a free action"]
        },
        hSenses: {
            label: "Heightened Senses",
            values: ["+10 to Perception to Sight", "Hearing"]
        }
    },
    experience: {
        total: 2500,
        advancements: []
    }
}
