/*skill = {
    name: string,
    lvl: int,
    color: string,
    tags: string,
    hitType: string,
    notes: string
}*/

gemList = { activeGems: [], supportGems: [] }

gemList.activeGems = [
        {
            name: "Fireball",
            lvl: 5,
            color: "blue",
            tags: "Projectile Spell AoE Fire",
			hitType: "spell",
			notes: ""
        },
        {
            name: "Vaal Fireball",
            lvl: 1,
            color: "blue",
            tags: "Projectile Vaal Spell AoE Fire",
			hitType: "spell",
			notes: ""
        },
        {
            name: "Ice Nova",
            lvl: 12,
            color: "blue",
            tags: "Spell AoE Cold",
			hitType: "spell",
			notes: ""
        },
        {
            name: "Vaal Ice Nova",
            lvl: 12,
            color: "blue",
            tags: "Vaal Spell AoE Cold",
			hitType: "spell",
			notes: ""
        },
        {
            name: "Leap Slam",
            lvl: 10,
            color: "red",
            tags: "Attack AoE Movement Melee",
			hitType: "attack",
			notes: ""
        },
        {
            name: "Charged Dash",
            lvl: 28,
            color: "green",
            tags: "Movement AoE Channelling Attack Lightning Melee",
			hitType: "attack",
			notes: ""
        },
        {
            name: "Blade Flurry",
            lvl: 28,
            color: "green",
            tags: "Attack AoE Channelling Melee",
			hitType: "attack",
			notes: ""
        },
        {
            name: "Sweep",
            lvl: 12,
            color: "red",
            tags: "Attack AoE Melee",
			hitType: "attack",
			notes: ""
        },
        {
            name: "Ground Slam",
            lvl: 5,
            color: "red",
            tags: "Attack AoE Melee",
			hitType: "attack",
			notes: ""
        },
        {
            name: "Vaal Ground Slam",
            lvl: 1,
            color: "red",
            tags: "Vaal Attack AoE Melee",
			hitType: "attack",
			notes: ""
        },
        {
            name: "Cleave",
            lvl: 5,
            color: "red",
            tags: "Attack AoE Melee",
			hitType: "attack",
			notes: ""
        },
        {
            name: "Shield Charge",
            lvl: 10,
            color: "red",
            tags: "Attack AoE Movement Melee",
			hitType: "attack",
			notes: ""
        },
        {
            name: "Enduring Cry",
            lvl: 16,
            color: "red",
            tags: "Warcry AoE Duration",
			hitType: "none",
			notes: ""
        },
        {
            name: "Double Strike",
            lvl: 5,
            color: "green",
            tags: "Attack Melee",
			hitType: "attack",
			notes: ""
        },
        {
            name: "Vaal Double Strike",
            lvl: 1,
            color: "green",
            tags: "Vaal Attack Melee Duration",
			hitType: "attack",
			notes: ""
        },
        {
            name: "Lacerate",
            lvl: 12,
            color: "green",
            tags: "Attack AoE Melee",
			hitType: "attack",
			notes: ""
        },
        {
            name: "Elemental Hit",
            lvl: 5,
            color: "green",
            tags: "Attack Melee Fire Cold Lightning Bow",
			hitType: "attack",
			notes: ""
        },
        {
            name: "Immortal Call",
            lvl: 34,
            color: "red",
            tags: "Spell Duration",
			hitType: "none",
			notes: ""
        },
        {
            name: "Vaal Immortal Call",
            lvl: 34,
            color: "red",
            tags: "Vaal Spell Duration",
			hitType: "none",
			notes: ""
        },
        {
            name: "Dual Strike",
            lvl: 5,
            color: "green",
            tags: "Attack Melee",
			hitType: "attack",
			notes: ""
        },
        {
            name: "Whirling Blades",
            lvl: 10,
            color: "green",
            tags: "Attack Movement Melee",
			hitType: "attack",
			notes: ""
        },
        {
            name: "Frenzy",
            lvl: 16,
            color: "green",
            tags: "Attack Melee Bow",
			hitType: "attack",
			notes: ""
        },
        {
            name: "Detonate Dead",
            lvl: 5,
            color: "green",
            tags: "Spell AoE Fire",
			hitType: "secondary",
			notes: ""
        },
        {
            name: "Vaal Detonate Dead",
            lvl: 4,
            color: "green",
            tags: "Vaal Cast AoE Fire",
			hitType: "secondary",
			notes: ""
        },
        {
            name: "Volatile Dead",
            lvl: 12,
            color: "green",
            tags: "Spell AoE Fire",
			hitType: "spell",
			notes: ""
        },
        {
            name: "Unearth",
            lvl: 5,
            color: "green",
            tags: "Projectile Spell",
			hitType: "spell",
			notes: ""
        },
        {
            name: "Split Arrow",
            lvl: 5,
            color: "green",
            tags: "Attack Bow",
			hitType: "attack",
			notes: ""
        },
        {
            name: "Cold Snap",
            lvl: 5,
            color: "blue",
            tags: "Spell AoE Cold",
			hitType: "spell",
			notes: ""
        },
        {
            name: "Vaal Cold Snap",
            lvl: 4,
            color: "blue",
            tags: "Vaal Spell AoE Duration Cold",
			hitType: "spell",
			notes: ""
        },
        {
            name: "Raise Zombie",
            lvl: 5,
            color: "blue",
            tags: "Spell Minion",
			hitType: "minion",
			notes: ""
        },
        {
            name: "Caustic Arrow",
            lvl: 5,
            color: "green",
            tags: "Attack AoE Duration Chaos Bow",
			hitType: "attack",
			notes: ""
        },
        {
            name: "Blood Rage",
            lvl: 16,
            color: "green",
            tags: "Spell Duration",
			hitType: "none",
			notes: ""
        },
        {
            name: "Righteous Fire",
            lvl: 16,
            color: "blue",
            tags: "AoE Fire Burn DoT",
			hitType: "none",
			notes: "Swift Affliction and Efficacy Support can also be used when linked with either Spell Totem or Arcane Surge Support"
        },
        {
            name: "Vaal Righteous Fire",
            lvl: 16,
            color: "blue",
            tags: "Vaal Spell AoE Fire",
			hitType: "spell",
			notes: ""
        },
        {
            name: "Discharge",
            lvl: 28,
            color: "blue",
            tags: "Spell AoE Fire Cold Lightning",
			hitType: "spell",
			notes: ""
        },
        {
            name: "Portal",
            lvl: 10,
            color: "white",
            tags: "Spell Drop Only",
			hitType: "none",
			notes: ""
        },
        {
            name: "Vaal Breach",
            lvl: 10,
            color: "white",
            tags: "Vaal Spell",
			hitType: "none",
			notes: ""
        },
        {
            name: "Flicker Strike",
            lvl: 10,
            color: "green",
            tags: "Attack Melee Movement",
			hitType: "attack",
			notes: ""
        },
        {
            name: "Spark",
            lvl: 5,
            color: "blue",
            tags: "Projectile Spell Duration Lightning",
			hitType: "spell",
			notes: ""
        },
        {
            name: "Vaal Spark",
            lvl: 1,
            color: "blue",
            tags: "Projectile Vaal Spell Duration Lightning",
			hitType: "spell",
			notes: ""
        },
        {
            name: "Ice Spear",
            lvl: 12,
            color: "blue",
            tags: "Projectile Spell Cold",
			hitType: "spell",
			notes: ""
        },
        {
            name: "Raise Spectre",
            lvl: 28,
            color: "blue",
            tags: "Spell Minion",
			hitType: "minion",
			notes: ""
        },
        {
            name: "Infernal Blow",
            lvl: 5,
            color: "red",
            tags: "Attack AoE Melee Fire",
			hitType: "attack",
			notes: ""
        },
        {
            name: "Glacial Hammer",
            lvl: 5,
            color: "red",
            tags: "Attack Melee Cold",
			hitType: "attack",
			notes: ""
        },
        {
            name: "Vaal Glacial Hammer",
            lvl: 1,
            color: "red",
            tags: "Vaal Attack Melee Duration AoE Cold",
			hitType: "attack",
			notes: ""
        },
        {
            name: "Frost Wall",
            lvl: 5,
            color: "blue",
            tags: "Spell Duration Cold",
			hitType: "none",
			notes: ""
        },
        {
            name: "Freezing Pulse",
            lvl: 5,
            color: "blue",
            tags: "Projectile Spell Cold",
			hitType: "spell",
			notes: ""
        },
        {
            name: "Shock Nova",
            lvl: 28,
            color: "blue",
            tags: "Spell AoE Lightning",
			hitType: "spell",
			notes: ""
        },
        {
            name: "Viper Strike",
            lvl: 5,
            color: "green",
            tags: "Attack Duration Melee Chaos",
			hitType: "attack",
			notes: ""
        },
        {
            name: "Phase Run",
            lvl: 34,
            color: "green",
            tags: "Spell Duration Movement",
			hitType: "none",
			notes: ""
        },
        {
            name: "Explosive Arrow",
            lvl: 28,
            color: "green",
            tags: "Fire Attack AoE Duration Bow",
			hitType: "attack",
			notes: ""
        },
        {
            name: "Temporal Chains",
            lvl: 24,
            color: "green",
            tags: "Curse Spell AoE Duration",
			hitType: "none",
			notes: ""
        },
        {
            name: "Elemental Weakness",
            lvl: 24,
            color: "blue",
            tags: "Curse Spell AoE Duration",
			hitType: "none",
			notes: ""
        },
        {
            name: "Warlord's Mark",
            lvl: 24,
            color: "red",
            tags: "Curse Spell AoE Duration",
			hitType: "none",
			notes: ""
        },
        {
            name: "Punishment",
            lvl: 24,
            color: "red",
            tags: "Curse Spell AoE Duration",
			hitType: "none",
			notes: ""
        },
        {
            name: "Enfeeble",
            lvl: 24,
            color: "blue",
            tags: "Curse Spell AoE Duration",
			hitType: "none",
			notes: ""
        },
        {
            name: "Assassin's Mark",
            lvl: 24,
            color: "blue",
            tags: "Curse Spell AoE Duration",
			hitType: "none",
			notes: ""
        },
        {
            name: "Projectile Weakness",
            lvl: 24,
            color: "green",
            tags: "Curse Spell AoE Duration",
			hitType: "none",
			notes: ""
        },
        {
            name: "Despair",
            lvl: 24,
            color: "blue",
            tags: "Curse Spell AoE Duration Chaos",
			hitType: "none",
			notes: ""
        },
        {
            name: "Lightning Warp",
            lvl: 10,
            color: "blue",
            tags: "Spell AoE Duration Movement Lightning",
			hitType: "spell",
			notes: ""
        },
        {
            name: "Vaal Lightning Warp",
            lvl: 10,
            color: "blue",
            tags: "Vaal Spell AoE Duration Lightning",
			hitType: "spell",
			notes: ""
        },
        {
            name: "Summon Skeleton",
            lvl: 10,
            color: "blue",
            tags: "Spell Minion Duration",
			hitType: "minion",
			notes: ""
        },
        {
            name: "Vaal Summon Skeletons",
            lvl: 10,
            color: "blue",
            tags: "Vaal Spell Minion Duration",
			hitType: "minion",
			notes: ""
        },
        {
            name: "Heavy Strike",
            lvl: 5,
            color: "red",
            tags: "Attack Melee",
			hitType: "attack",
			notes: ""
        },
        {
            name: "Dominating Blow",
            lvl: 28,
            color: "red",
            tags: "Attack Minion Duration Melee",
			hitType: "attack",
			notes: ""
        },
        {
            name: "Rain of Arrows",
            lvl: 12,
            color: "green",
            tags: "Attack AoE Bow",
			hitType: "attack",
			notes: ""
        },
        {
            name: "Vaal Rain of Arrows",
            lvl: 12,
            color: "green",
            tags: "Vaal Attack AoE Duration Bow",
			hitType: "attack",
			notes: ""
        },
        {
            name: "Firestorm",
            lvl: 12,
            color: "blue",
            tags: "Spell AoE Duration Fire",
			hitType: "spell",
			notes: ""
        },
        {
            name: "Lightning Strike",
            lvl: 12,
            color: "green",
            tags: "Projectile Attack Melee Lightning",
			hitType: "attack",
			notes: ""
        },
        {
            name: "Vaal Lightning Strike",
            lvl: 12,
            color: "green",
            tags: "Vaal Attack Melee Duration Lightning",
			hitType: "attack",
			notes: ""
        },
        {
            name: "Tempest Shield",
            lvl: 16,
            color: "blue",
            tags: "Spell Lightning Chaining Duration",
			hitType: "spell",
			notes: ""
        },
        {
            name: "Molten Shell",
            lvl: 5,
            color: "red",
            tags: "Spell AoE Duration Fire",
			hitType: "spell",
			notes: ""
        },
        {
            name: "Vaal Molten Shell",
            lvl: 4,
            color: "red",
            tags: "Vaal Spell AoE Duration Fire",
			hitType: "spell",
			notes: ""
        },
        {
            name: "Power Siphon",
            lvl: 12,
            color: "blue",
            tags: "Attack Projectile",
			hitType: "attack",
			notes: ""
        },
        {
            name: "Vaal Power Siphon",
            lvl: 12,
            color: "blue",
            tags: "Vaal Attack Projectile",
			hitType: "attack",
			notes: ""
        },
        {
            name: "Puncture",
            lvl: 5,
            color: "green",
            tags: "Attack Duration Melee Bow",
			hitType: "attack",
			notes: ""
        },
        {
            name: "Lightning Arrow",
            lvl: 12,
            color: "green",
            tags: "Attack AoE Lightning Bow",
			hitType: "attack",
			notes: ""
        },
        {
            name: "Haste",
            lvl: 24,
            color: "green",
            tags: "Aura Spell AoE",
			hitType: "none",
			notes: ""
        },
        {
            name: "Vaal Haste",
            lvl: 24,
            color: "green",
            tags: "Aura Vaal Spell AoE Duration",
			hitType: "none",
			notes: ""
        },
        {
            name: "Purity of Elements",
            lvl: 24,
            color: "blue",
            tags: "Aura Spell AoE",
			hitType: "none",
			notes: ""
        },
        {
            name: "Vitality",
            lvl: 24,
            color: "red",
            tags: "Aura Spell AoE",
			hitType: "none",
			notes: ""
        },
        {
            name: "Discipline",
            lvl: 24,
            color: "blue",
            tags: "Aura Spell AoE",
			hitType: "none",
			notes: ""
        },
        {
            name: "Vaal Discipline",
            lvl: 24,
            color: "blue",
            tags: "Aura Vaal Spell AoE Duration",
			hitType: "none",
			notes: ""
        },
        {
            name: "Grace",
            lvl: 24,
            color: "green",
            tags: "Aura Spell AoE",
			hitType: "none",
			notes: ""
        },
        {
            name: "Vaal Grace",
            lvl: 24,
            color: "green",
            tags: "Aura Vaal Spell AoE Duration",
			hitType: "none",
			notes: ""
        },
        {
            name: "Determination",
            lvl: 24,
            color: "red",
            tags: "Aura Spell AoE",
			hitType: "none",
			notes: ""
        },
        {
            name: "Anger",
            lvl: 24,
            color: "red",
            tags: "Aura Spell AoE Fire",
			hitType: "none",
			notes: ""
        },
        {
            name: "Hatred",
            lvl: 24,
            color: "green",
            tags: "Aura Spell AoE Cold",
			hitType: "none",
			notes: ""
        },
        {
            name: "Wrath",
            lvl: 24,
            color: "blue",
            tags: "Aura Spell AoE Lightning",
			hitType: "none",
			notes: ""
        },
        {
            name: "Burning Arrow",
            lvl: 5,
            color: "green",
            tags: "Attack Fire Bow",
			hitType: "attack",
			notes: ""
        },
        {
            name: "Vaal Burning Arrow",
            lvl: 1,
            color: "green",
            tags: "Vaal Attack AoE Fire Bow",
			hitType: "attack",
			notes: ""
        },
        {
            name: "Clarity",
            lvl: 10,
            color: "blue",
            tags: "Aura Spell AoE",
			hitType: "none",
			notes: ""
        },
        {
            name: "Vaal Clarity",
            lvl: 10,
            color: "blue",
            tags: "Aura Vaal Spell AoE Duration",
			hitType: "none",
			notes: ""
        },
        {
            name: "Detonate Mines",
            lvl: 8,
            color: "white",
            tags: "Spell",
			hitType: "none",
			notes: ""
        },
        {
            name: "Shockwave Totem",
            lvl: 28,
            color: "red",
            tags: "Totem Spell AoE Duration",
			hitType: "spell",
			notes: ""
        },
        {
            name: "Rejuvenation Totem",
            lvl: 5,
            color: "red",
            tags: "Totem Aura Spell AoE Duration",
			hitType: "none",
			notes: ""
        },
        {
            name: "Freeze Mine",
            lvl: 10,
            color: "green",
            tags: "Mine Spell AoE Duration Cold",
			hitType: "spell",
			notes: ""
        },
        {
            name: "Conversion Trap",
            lvl: 5,
            color: "blue",
            tags: "Trap Spell Duration",
			hitType: "none",
			notes: ""
        },
        {
            name: "Bear Trap",
            lvl: 5,
            color: "green",
            tags: "Trap Duration Cast",
			hitType: "secondary",
			notes: ""
        },
        {
            name: "Fire Trap",
            lvl: 5,
            color: "green",
            tags: "Trap Spell Duration AoE Fire",
			hitType: "spell",
			notes: ""
        },
        {
            name: "Decoy Totem",
            lvl: 5,
            color: "red",
            tags: "Totem Spell Duration AoE",
			hitType: "",
			notes: ""
        },
        {
            name: "Devouring Totem",
            lvl: 5,
            color: "red",
            tags: "Totem Spell Duration",
			hitType: "",
			notes: ""
        },
        {
            name: "Ethereal Knives",
            lvl: 5,
            color: "green",
            tags: "Projectile Spell",
			hitType: "",
			notes: ""
        },
        {
            name: "Ice Shot",
            lvl: 5,
            color: "green",
            tags: "Attack AoE Duration Cold Bow",
			hitType: "attack",
			notes: ""
        },
        {
            name: "Arctic Breath",
            lvl: 28,
            color: "blue",
            tags: "Projectile Spell Duration AoE Cold",
			hitType: "",
			notes: ""
        },
        {
            name: "Arc",
            lvl: 12,
            color: "blue",
            tags: "Spell Chaining Lightning",
			hitType: "",
			notes: ""
        },
        {
            name: "Vaal Arc",
            lvl: 12,
            color: "blue",
            tags: "Vaal Spell Chaining Lightning",
			hitType: "",
			notes: ""
        },
        {
            name: "Arctic Armour",
            lvl: 16,
            color: "green",
            tags: "Spell Duration Cold",
			hitType: "",
			notes: ""
        },
        {
            name: "Flame Totem",
            lvl: 5,
            color: "red",
            tags: "Projectile Totem Spell Duration Fire",
			hitType: "",
			notes: ""
        },
        {
            name: "Flammability",
            lvl: 24,
            color: "blue",
            tags: "Curse Spell AoE Duration Fire",
			hitType: "",
			notes: ""
        },
        {
            name: "Frostbite",
            lvl: 24,
            color: "blue",
            tags: "Curse Spell AoE Duration Cold",
			hitType: "",
			notes: ""
        },
        {
            name: "Conductivity",
            lvl: 24,
            color: "blue",
            tags: "Curse Spell AoE Duration Lightning",
			hitType: "",
			notes: ""
        },
        {
            name: "Storm Burst",
            lvl: 28,
            color: "blue",
            tags: "Projectile AoE Spell Lightning Channelling",
			hitType: "",
			notes: ""
        },
        {
            name: "Incinerate",
            lvl: 12,
            color: "blue",
            tags: "Projectile Spell Fire Channelling",
			hitType: "",
			notes: ""
        },
        {
            name: "Cyclone",
            lvl: 28,
            color: "green",
            tags: "Attack AoE Movement Melee",
			hitType: "attack",
			notes: ""
        },
        {
            name: "Vaal Cyclone",
            lvl: 28,
            color: "green",
            tags: "Vaal Attack AoE Duration Melee",
			hitType: "attack",
			notes: ""
        },
        {
            name: "Searing Bond",
            lvl: 12,
            color: "red",
            tags: "Totem Spell Duration Fire",
			hitType: "",
			notes: ""
        },
        {
            name: "Reave",
            lvl: 12,
            color: "green",
            tags: "Attack AoE Melee",
			hitType: "attack",
			notes: ""
        },
        {
            name: "Vaal Reave",
            lvl: 12,
            color: "green",
            tags: "Vaal Attack AoE Melee",
			hitType: "attack",
			notes: ""
        },
        {
            name: "Lightning Trap",
            lvl: 12,
            color: "blue",
            tags: "Projectile Trap Spell Duration Lightning",
			hitType: "",
			notes: ""
        },
        {
            name: "Vaal Lightning Trap",
            lvl: 12,
            color: "blue",
            tags: "Projectile Trap Vaal Spell Duration Lightning",
			hitType: "",
			notes: ""
        },
        {
            name: "Smoke Mine",
            lvl: 10,
            color: "green",
            tags: "Mine Spell AoE Duration Movement",
			hitType: "",
			notes: ""
        },
        {
            name: "Animate Guardian",
            lvl: 28,
            color: "red",
            tags: "Spell Minion",
			hitType: "",
			notes: ""
        },
        {
            name: "Spectral Throw",
            lvl: 5,
            color: "green",
            tags: "Projectile Attack",
			hitType: "attack",
			notes: ""
        },
        {
            name: "Vaal Spectral Throw",
            lvl: 1,
            color: "green",
            tags: "Projectile Vaal Attack",
			hitType: "attack",
			notes: ""
        },
        {
            name: "Animate Weapon",
            lvl: 5,
            color: "green",
            tags: "Duration Minion Spell",
			hitType: "",
			notes: ""
        },
        {
            name: "Purity of Fire",
            lvl: 24,
            color: "red",
            tags: "Aura Spell AoE Fire",
			hitType: "",
			notes: ""
        },
        {
            name: "Purity of Ice",
            lvl: 24,
            color: "green",
            tags: "Aura Spell AoE Cold",
			hitType: "",
			notes: ""
        },
        {
            name: "Purity of Lightning",
            lvl: 24,
            color: "blue",
            tags: "Aura Spell AoE Lightning",
			hitType: "",
			notes: ""
        },
        {
            name: "Storm Call",
            lvl: 12,
            color: "blue",
            tags: "Spell AoE Duration Lightning",
			hitType: "",
			notes: ""
        },
        {
            name: "Vaal Storm Call",
            lvl: 12,
            color: "blue",
            tags: "Vaal Spell AoE Duration Lightning",
			hitType: "",
			notes: ""
        },
        {
            name: "Flameblast",
            lvl: 28,
            color: "blue",
            tags: "Spell AoE Fire Channelling",
			hitType: "",
			notes: ""
        },
        {
            name: "Vaal Flameblast",
            lvl: 28,
            color: "blue",
            tags: "Vaal Spell AoE Fire",
			hitType: "",
			notes: ""
        },
        {
            name: "Barrage",
            lvl: 12,
            color: "green",
            tags: "Attack Bow",
			hitType: "attack",
			notes: ""
        },
        {
            name: "Ball Lightning",
            lvl: 28,
            color: "blue",
            tags: "Projectile Spell AoE Lightning",
			hitType: "",
			notes: ""
        },
        {
            name: "Summon Raging Spirit",
            lvl: 5,
            color: "blue",
            tags: "Spell Minion Duration Fire",
			hitType: "",
			notes: ""
        },
        {
            name: "Flame Surge",
            lvl: 12,
            color: "blue",
            tags: "Spell AoE Fire",
			hitType: "",
			notes: ""
        },
        {
            name: "Desecrate",
            lvl: 16,
            color: "green",
            tags: "Spell AoE Duration Chaos",
			hitType: "",
			notes: ""
        },
        {
            name: "Flesh Offering",
            lvl: 12,
            color: "blue",
            tags: "Minion Spell Duration",
			hitType: "",
			notes: ""
        },
        {
            name: "Bone Offering",
            lvl: 12,
            color: "blue",
            tags: "Minion Spell Duration",
			hitType: "",
			notes: ""
        },
        {
            name: "Spirit Offering",
            lvl: 12,
            color: "blue",
            tags: "Minion Spell Duration",
			hitType: "",
			notes: ""
        },
        {
            name: "Glacial Cascade",
            lvl: 28,
            color: "blue",
            tags: "Spell AoE Cold",
			hitType: "",
			notes: ""
        },
        {
            name: "Molten Strike",
            lvl: 5,
            color: "red",
            tags: "Projectile Attack AoE Melee Fire",
			hitType: "attack",
			notes: ""
        },
        {
            name: "Convocation",
            lvl: 24,
            color: "blue",
            tags: "Minion Spell Duration",
			hitType: "",
			notes: ""
        },
        {
            name: "Fire Nova Mine",
            lvl: 12,
            color: "blue",
            tags: "AoE Mine Spell Fire Duration",
			hitType: "",
			notes: ""
        },
        {
            name: "Tornado Shot",
            lvl: 28,
            color: "green",
            tags: "Attack Bow",
			hitType: "attack",
			notes: ""
        },
        {
            name: "Herald of Ash",
            lvl: 16,
            color: "red",
            tags: "Spell AoE Fire Herald Duration",
			hitType: "",
			notes: ""
        },
        {
            name: "Herald of Ice",
            lvl: 16,
            color: "green",
            tags: "Cast AoE Cold Herald",
			hitType: "secondary",
			notes: ""
        },
        {
            name: "Herald of Thunder",
            lvl: 16,
            color: "blue",
            tags: "Cast AoE Duration Lightning Herald",
			hitType: "secondary",
			notes: ""
        },
        {
            name: "Poacher's Mark",
            lvl: 24,
            color: "green",
            tags: "Curse Spell AoE Duration",
			hitType: "",
			notes: ""
        },
        {
            name: "Lightning Tendrils",
            lvl: 5,
            color: "blue",
            tags: "Spell AoE Lightning Channelling",
			hitType: "",
			notes: ""
        },
        {
            name: "Kinetic Blast",
            lvl: 28,
            color: "blue",
            tags: "Attack AoE Projectile",
			hitType: "attack",
			notes: ""
        },
        {
            name: "Blink Arrow",
            lvl: 10,
            color: "green",
            tags: "Attack Minion Duration Movement Bow",
			hitType: "attack",
			notes: ""
        },
        {
            name: "Mirror Arrow",
            lvl: 10,
            color: "green",
            tags: "Attack Minion Duration Bow",
			hitType: "attack",
			notes: ""
        },
        {
            name: "Riposte",
            lvl: 5,
            color: "green",
            tags: "Trigger Attack Melee",
			hitType: "attack",
			notes: ""
        },
        {
            name: "Reckoning",
            lvl: 5,
            color: "red",
            tags: "Trigger Attack AoE Melee",
			hitType: "attack",
			notes: ""
        },
        {
            name: "Static Strike",
            lvl: 12,
            color: "red",
            tags: "Attack Melee AoE Duration Lightning",
			hitType: "attack",
			notes: ""
        },
        {
            name: "Vengeance",
            lvl: 24,
            color: "red",
            tags: "Trigger Attack AoE Melee",
			hitType: "attack",
			notes: ""
        },
        {
            name: "Summon Chaos Golem",
            lvl: 34,
            color: "blue",
            tags: "Chaos Minion Spell Golem",
			hitType: "",
			notes: ""
        },
        {
            name: "Summon Ice Golem",
            lvl: 34,
            color: "green",
            tags: "Cold Minion Spell Golem",
			hitType: "",
			notes: ""
        },
        {
            name: "Summon Flame Golem",
            lvl: 34,
            color: "red",
            tags: "Fire Minion Spell Golem",
			hitType: "",
			notes: ""
        },
        {
            name: "Summon Lightning Golem",
            lvl: 34,
            color: "blue",
            tags: "Lightning Minion Spell Golem",
			hitType: "",
			notes: ""
        },
        {
            name: "Ice Crash",
            lvl: 28,
            color: "red",
            tags: "Attack AoE Cold Melee",
			hitType: "attack",
			notes: ""
        },
        {
            name: "Rallying Cry",
            lvl: 10,
            color: "red",
            tags: "Warcry AoE Duration",
			hitType: "none",
			notes: ""
        },
        {
            name: "Abyssal Cry",
            lvl: 34,
            color: "red",
            tags: "Warcry AoE Duration Chaos",
			hitType: "secondary",
			notes: ""
        },
        {
            name: "Flame Dash",
            lvl: 10,
            color: "blue",
            tags: "Spell Movement Duration Fire",
			hitType: "",
			notes: ""
        },
        {
            name: "Vigilant Strike",
            lvl: 5,
            color: "red",
            tags: "Attack Melee",
			hitType: "attack",
			notes: ""
        },
        {
            name: "Frost Blades",
            lvl: 5,
            color: "green",
            tags: "Projectile Attack Melee Cold",
			hitType: "attack",
			notes: ""
        },
        {
            name: "Magma Orb",
            lvl: 5,
            color: "blue",
            tags: "Projectile Spell AoE Fire Chaining",
			hitType: "",
			notes: ""
        },
        {
            name: "Wild Strike",
            lvl: 28,
            color: "green",
            tags: "Projectile Attack Melee Lightning Cold Fire AoE Chaining",
			hitType: "attack",
			notes: ""
        },
        {
            name: "Ice Trap",
            lvl: 28,
            color: "green",
            tags: "Trap Spell AoE Cold Duration",
			hitType: "",
			notes: ""
        },
        {
            name: "Blast Rain",
            lvl: 28,
            color: "green",
            tags: "Fire Attack AoE Bow",
			hitType: "attack",
			notes: ""
        },
        {
            name: "Shrapnel Shot",
            lvl: 5,
            color: "green",
            tags: "Lightning Attack AoE Bow",
			hitType: "attack",
			notes: ""
        },
        {
            name: "Bladefall",
            lvl: 28,
            color: "green",
            tags: "Spell AoE",
			hitType: "",
			notes: ""
        },
        {
            name: "Blade Vortex",
            lvl: 12,
            color: "green",
            tags: "Spell AoE Duration",
			hitType: "",
			notes: ""
        },
        {
            name: "Frost Bomb",
            lvl: 5,
            color: "blue",
            tags: "Spell AoE Duration Cold",
			hitType: "",
			notes: ""
        },
        {
            name: "Siege Ballista",
            lvl: 5,
            color: "green",
            tags: "Totem Attack Duration Bow",
			hitType: "attack",
			notes: ""
        },
        {
            name: "Orb of Storms",
            lvl: 5,
            color: "blue",
            tags: "Lightning Spell Duration AoE Chaining",
			hitType: "",
			notes: ""
        },
        {
            name: "Summon Stone Golem",
            lvl: 34,
            color: "red",
            tags: "Minion Spell Golem",
			hitType: "",
			notes: ""
        },
        {
            name: "Earthquake",
            lvl: 28,
            color: "red",
            tags: "Attack AoE Duration Melee",
			hitType: "attack",
			notes: ""
        },
        {
            name: "Contagion",
            lvl: 5,
            color: "blue",
            tags: "Spell AoE Duration Chaos",
			hitType: "",
			notes: ""
        },
        {
            name: "Wither",
            lvl: 10,
            color: "blue",
            tags: "Spell AoE Duration Chaos Channelling",
			hitType: "",
			notes: ""
        },
        {
            name: "Blight",
            lvl: 5,
            color: "blue",
            tags: "Spell Chaos AoE Channelling Duration",
			hitType: "",
			notes: ""
        },
        {
            name: "Essence Drain",
            lvl: 12,
            color: "blue",
            tags: "Projectile Spell Duration Chaos",
			hitType: "",
			notes: ""
        },
        {
            name: "Ancestral Protector",
            lvl: 5,
            color: "red",
            tags: "Totem Attack Duration Melee",
			hitType: "attack",
			notes: ""
        },
        {
            name: "Ancestral Warchief",
            lvl: 28,
            color: "red",
            tags: "Totem Attack Duration AoE Melee",
			hitType: "attack",
			notes: ""
        },
        {
            name: "Sunder",
            lvl: 12,
            color: "red",
            tags: "Attack AoE Melee",
			hitType: "attack",
			notes: ""
        },
        {
            name: "Frostbolt",
            lvl: 5,
            color: "blue",
            tags: "Projectile Spell Cold",
			hitType: "",
			notes: ""
        },
        {
            name: "Vortex",
            lvl: 28,
            color: "blue",
            tags: "Spell AoE Cold Duration",
			hitType: "",
			notes: ""
        },
        {
            name: "Dark Pact",
            lvl: 28,
            color: "blue",
            tags: "Minion Spell AoE Chaining Chaos",
			hitType: "",
			notes: ""
        },
        {
            name: "Scorching Ray",
            lvl: 12,
            color: "blue",
            tags: "Spell Fire Duration Channelling",
			hitType: "",
			notes: ""
        },
        {
            name: "Cremation",
            lvl: 28,
            color: "green",
            tags: "Projectile Spell AoE Fire Duration",
			hitType: "",
			notes: ""
        },
        {
            name: "Bodyswap",
            lvl: 10,
            color: "blue",
            tags: "Movement Spell AoE Fire",
			hitType: "",
			notes: ""
        },
        {
            name: "Vulnerability",
            lvl: 24,
            color: "red",
            tags: "Curse Spell AoE Duration",
			hitType: "",
			notes: ""
        }
    ]
