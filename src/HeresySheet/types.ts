export type CharacteristicKey =
    | "weapon"
    | "ballistic"
    | "strength"
    | "toughness"
    | "agility"
    | "inteligence"
    | "perception"
    | "willPower"
    | "fellowship";

export type HeresySheetStats = {
    characteristics: {
        [K in CharacteristicKey]: Characteristic;
    };
    skills: {
        basic: {
            [K in BasicSkillKeys]: Skill;
        };
        advanced: {
            [K in AdvancedSkillKeys]: Skill;
        };
    };
    talents: {
        [K in string]: Talent
    },
    experience: Experience
};

export type Skills = {
    [K in BasicSkillKeys | AdvancedSkillKeys]?: Skill;
};

export type Skill = {
    type: Characteristic["shortHand"];
    level: `Half` | "+0" | "+10" | "+20";
    subTypes?: string[];
};

export type Talent = {
    label: string,
    values: string[]
}

export type Experience = {
    total: number,
    advancements: Advancement[]
}

export type Advancement = {
    label: string,
    cost: number,
    type?: "talent" | "skill"
}

export type Characteristic = {
    value: number;
    shortHand: "Per" | "Fel" | "T" | "WS" | "BS" | "Str" | "Ag" | "Int" | "WP";
    longHand: string;
};

export type BasicSkillKeys =
    | "awareness"
    | "barter"
    | "carouse"
    | "charm"
    | "climb"
    | "concealment"
    | "contortionist"
    | "deceive"
    | "dodge"
    | "evaluate"
    | "gamble"
    | "inquiry"
    | "intimidate"
    | "logic"
    | "scrutiny"
    | "search"
    | "silentMove"
    | "swim"
    | "techUse";

export type AdvancedSkillKeys = "speakLanguage";
