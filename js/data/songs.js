// ===================================
// LEANYFI - Song Database
// ===================================

// Song data structure:
// {
//   id: unique identifier
//   title: song name
//   album: album name
//   year: release year
//   difficulty: 'normal' | 'hardcore'
//   spotifyPreviewUrl: Spotify 30s preview URL (for normal mode)
//   localAudioPath: path to local file (for hardcore mode)
//   isReleased: true/false
//   source: 'spotify' | 'youtube' | 'soundcloud'
// }

const SONGS_DATABASE = {
    // ===== NORMAL MODE - Local MP3 Files =====
    normal: [
        // Downloaded tracks
        {
            id: 'local_1',
            title: 'Ginseng Strip 2002',
            album: 'Unknown Death 2002',
            year: 2013,
            difficulty: 'normal',
            localAudioPath: 'assets/audio/Ginseng Strip 2002.mp3',
            chorusStart: 40,
            isReleased: true,
            source: 'local'
        },
        {
            id: 'local_2',
            title: 'Kyoto',
            album: 'Unknown Death 2002',
            year: 2013,
            difficulty: 'normal',
            localAudioPath: 'assets/audio/Kyoto.mp3',
            chorusStart: 40,
            isReleased: true,
            source: 'local'
        },
        {
            id: 'local_3',
            title: 'Yoshi City',
            album: 'Unknown Memory',
            year: 2014,
            difficulty: 'normal',
            localAudioPath: 'assets/audio/Yoshi City.mp3',
            chorusStart: 40,
            isReleased: true,
            source: 'local'
        },
        // Unknown Death 2002 (2013)
        {
            id: 'local_4',
            title: 'Welcome 2 Unknown Death',
            album: 'Unknown Death 2002',
            year: 2013,
            difficulty: 'normal',
            localAudioPath: 'assets/audio/Welcome 2 Unknown Death_spotdown.org.mp3',
            chorusStart: 40,
            isReleased: true,
            source: 'local'
        },
        {
            id: 'local_5',
            title: 'Nitevision',
            album: 'Unknown Death 2002',
            year: 2013,
            difficulty: 'normal',
            localAudioPath: 'assets/audio/Nitevision_spotdown.org.mp3',
            chorusStart: 40,
            isReleased: true,
            source: 'local'
        },
        {
            id: 'local_6',
            title: 'Oceans 2001',
            album: 'Unknown Death 2002',
            year: 2013,
            difficulty: 'normal',
            localAudioPath: 'assets/audio/Oceans 2001_spotdown.org.mp3',
            chorusStart: 40,
            isReleased: true,
            source: 'local'
        },
        {
            id: 'local_7',
            title: 'Gatorade',
            album: 'Unknown Death 2002',
            year: 2013,
            difficulty: 'normal',
            localAudioPath: 'assets/audio/Gatorade_spotdown.org.mp3',
            chorusStart: 40,
            isReleased: true,
            source: 'local'
        },
        {
            id: 'local_8',
            title: 'Hurt',
            album: 'Unknown Death 2002',
            year: 2013,
            difficulty: 'normal',
            localAudioPath: 'assets/audio/Hurt_spotdown.org.mp3',
            chorusStart: 40,
            isReleased: true,
            source: 'local'
        },
        {
            id: 'local_9',
            title: 'Lightsaber / Saviour',
            album: 'Unknown Death 2002',
            year: 2013,
            difficulty: 'normal',
            localAudioPath: 'assets/audio/Lightsaber __ Saviour_spotdown.org.mp3',
            chorusStart: 40,
            isReleased: true,
            source: 'local'
        },
        {
            id: 'local_10',
            title: 'Princess Daisy',
            album: 'Unknown Death 2002',
            year: 2013,
            difficulty: 'normal',
            localAudioPath: 'assets/audio/Princess Daisy_spotdown.org.mp3',
            chorusStart: 40,
            isReleased: true,
            source: 'local'
        },
        {
            id: 'local_11',
            title: 'Lemonade',
            album: 'Unknown Death 2002',
            year: 2013,
            difficulty: 'normal',
            localAudioPath: 'assets/audio/Lemonade_spotdown.org.mp3',
            chorusStart: 40,
            isReleased: true,
            source: 'local'
        },
        {
            id: 'local_12',
            title: 'Emails',
            album: 'Unknown Death 2002',
            year: 2013,
            difficulty: 'normal',
            localAudioPath: 'assets/audio/Emails_spotdown.org.mp3',
            chorusStart: 40,
            isReleased: true,
            source: 'local'
        },
        {
            id: 'local_13',
            title: 'Deathstar / Getting Benjamins',
            album: 'Unknown Death 2002',
            year: 2013,
            difficulty: 'normal',
            localAudioPath: 'assets/audio/Deathstar __ Getting Benjamins_spotdown.org.mp3',
            chorusStart: 40,
            isReleased: true,
            source: 'local'
        },
        {
            id: 'local_14',
            title: 'Heal You / Bladerunner',
            album: 'Unknown Death 2002',
            year: 2013,
            difficulty: 'normal',
            localAudioPath: 'assets/audio/Heal You __ Bladerunner_spotdown.org.mp3',
            chorusStart: 40,
            isReleased: true,
            source: 'local'
        },
        {
            id: 'local_15',
            title: 'Solarflare',
            album: 'Unknown Death 2002',
            year: 2013,
            difficulty: 'normal',
            localAudioPath: 'assets/audio/Solarflare_spotdown.org.mp3',
            chorusStart: 40,
            isReleased: true,
            source: 'local'
        },
        // Unknown Memory (2014)
        {
            id: 'local_16',
            title: 'Blinded',
            album: 'Unknown Memory',
            year: 2014,
            difficulty: 'normal',
            localAudioPath: 'assets/audio/Blinded_spotdown.org.mp3',
            chorusStart: 40,
            isReleased: true,
            source: 'local'
        },
        {
            id: 'local_17',
            title: 'Sunrise Angel',
            album: 'Unknown Memory',
            year: 2014,
            difficulty: 'normal',
            localAudioPath: 'assets/audio/Sunrise Angel_spotdown.org.mp3',
            chorusStart: 40,
            isReleased: true,
            source: 'local'
        },
        {
            id: 'local_18',
            title: 'Ice Cold Smoke',
            album: 'Unknown Memory',
            year: 2014,
            difficulty: 'normal',
            localAudioPath: 'assets/audio/Ice Cold Smoke_spotdown.org.mp3',
            chorusStart: 40,
            isReleased: true,
            source: 'local'
        },
        {
            id: 'local_19',
            title: "Don't Go",
            album: 'Unknown Memory',
            year: 2014,
            difficulty: 'normal',
            localAudioPath: "assets/audio/Don't Go_spotdown.org.mp3",            isReleased: true,
            source: 'local'
        },
        {
            id: 'local_20',
            title: 'Ghosttown',
            album: 'Unknown Memory',
            year: 2014,
            difficulty: 'normal',
            localAudioPath: 'assets/audio/Ghosttown_spotdown.org.mp3',
            chorusStart: 40,
            isReleased: true,
            source: 'local'
        },
        {
            id: 'local_21',
            title: 'Monster',
            album: 'Unknown Memory',
            year: 2014,
            difficulty: 'normal',
            localAudioPath: 'assets/audio/Monster_spotdown.org.mp3',
            chorusStart: 40,
            isReleased: true,
            source: 'local'
        },
        {
            id: 'local_22',
            title: 'Volt',
            album: 'Unknown Memory',
            year: 2014,
            difficulty: 'normal',
            localAudioPath: 'assets/audio/Volt_spotdown.org.mp3',
            chorusStart: 40,
            isReleased: true,
            source: 'local'
        },
        {
            id: 'local_23',
            title: 'Leanworld',
            album: 'Unknown Memory',
            year: 2014,
            difficulty: 'normal',
            localAudioPath: 'assets/audio/Leanworld_spotdown.org.mp3',
            chorusStart: 40,
            isReleased: true,
            source: 'local'
        },
        {
            id: 'local_24',
            title: 'Sandman',
            album: 'Unknown Memory',
            year: 2014,
            difficulty: 'normal',
            localAudioPath: 'assets/audio/Sandman_spotdown.org.mp3',
            chorusStart: 40,
            isReleased: true,
            source: 'local'
        },
        // Warlord (2016)
        {
            id: 'local_25',
            title: 'Immortal',
            album: 'Warlord',
            year: 2016,
            difficulty: 'normal',
            localAudioPath: 'assets/audio/Immortal_spotdown.org.mp3',
            chorusStart: 40,
            isReleased: true,
            source: 'local'
        },
        {
            id: 'local_26',
            title: 'Highway Patrol',
            album: 'Warlord',
            year: 2016,
            difficulty: 'normal',
            localAudioPath: 'assets/audio/Highway Patrol_spotdown.org.mp3',
            chorusStart: 40,
            isReleased: true,
            source: 'local'
        },
        {
            id: 'local_27',
            title: 'Fantasy',
            album: 'Warlord',
            year: 2016,
            difficulty: 'normal',
            localAudioPath: 'assets/audio/Fantasy_spotdown.org.mp3',
            chorusStart: 40,
            isReleased: true,
            source: 'local'
        },
        {
            id: 'local_28',
            title: 'Afghanistan',
            album: 'Warlord',
            year: 2016,
            difficulty: 'normal',
            localAudioPath: 'assets/audio/Afghanistan_spotdown.org.mp3',
            chorusStart: 40,
            isReleased: true,
            source: 'local'
        },
        {
            id: 'local_29',
            title: 'Hoover',
            album: 'Warlord',
            year: 2016,
            difficulty: 'normal',
            localAudioPath: 'assets/audio/Hoover_spotdown.org.mp3',
            chorusStart: 40,
            isReleased: true,
            source: 'local'
        },
        {
            id: 'local_30',
            title: 'Fire',
            album: 'Warlord',
            year: 2016,
            difficulty: 'normal',
            localAudioPath: 'assets/audio/Fire_spotdown.org.mp3',
            chorusStart: 40,
            isReleased: true,
            source: 'local'
        },
        {
            id: 'local_31',
            title: 'Stay Down',
            album: 'Warlord',
            year: 2016,
            difficulty: 'normal',
            localAudioPath: 'assets/audio/Stay Down_spotdown.org.mp3',
            chorusStart: 40,
            isReleased: true,
            source: 'local'
        },
        {
            id: 'local_32',
            title: 'Eye Contact',
            album: 'Warlord',
            year: 2016,
            difficulty: 'normal',
            localAudioPath: 'assets/audio/Eye Contact_spotdown.org.mp3',
            chorusStart: 40,
            isReleased: true,
            source: 'local'
        },
        {
            id: 'local_33',
            title: 'More Stacks',
            album: 'Warlord',
            year: 2016,
            difficulty: 'normal',
            localAudioPath: 'assets/audio/More Stacks_spotdown.org.mp3',
            chorusStart: 40,
            isReleased: true,
            source: 'local'
        },
        {
            id: 'local_34',
            title: 'AF1S',
            album: 'Warlord',
            year: 2016,
            difficulty: 'normal',
            localAudioPath: 'assets/audio/Af1s_spotdown.org.mp3',
            chorusStart: 40,
            isReleased: true,
            source: 'local'
        },
        {
            id: 'local_35',
            title: 'Hocus Pocus',
            album: 'Warlord',
            year: 2016,
            difficulty: 'normal',
            localAudioPath: 'assets/audio/Hocus Pocus_spotdown.org.mp3',
            chorusStart: 40,
            isReleased: true,
            source: 'local'
        },
        {
            id: 'local_36',
            title: 'Shawty U Know What It Do',
            album: 'Warlord',
            year: 2016,
            difficulty: 'normal',
            localAudioPath: 'assets/audio/Shawty U Know What It Do_spotdown.org.mp3',
            chorusStart: 40,
            isReleased: true,
            source: 'local'
        },
        {
            id: 'local_37',
            title: 'Miami Ultras',
            album: 'Warlord',
            year: 2016,
            difficulty: 'normal',
            localAudioPath: 'assets/audio/Miami Ultras_spotdown.org.mp3',
            chorusStart: 40,
            isReleased: true,
            source: 'local'
        },
        {
            id: 'local_38',
            title: 'Sippin',
            album: 'Warlord',
            year: 2016,
            difficulty: 'normal',
            localAudioPath: 'assets/audio/Sippin_spotdown.org.mp3',
            chorusStart: 40,
            isReleased: true,
            source: 'local'
        },
        {
            id: 'local_39',
            title: 'God Only Knows',
            album: 'Warlord',
            year: 2016,
            difficulty: 'normal',
            localAudioPath: 'assets/audio/God Only Knows_spotdown.org.mp3',
            chorusStart: 40,
            isReleased: true,
            source: 'local'
        },
        {
            id: 'local_40',
            title: 'How U Like Me Now',
            album: 'Warlord',
            year: 2016,
            difficulty: 'normal',
            localAudioPath: 'assets/audio/How U Like Me Now__spotdown.org.mp3',
            chorusStart: 40,
            isReleased: true,
            source: 'local'
        },
        {
            id: 'local_41',
            title: 'Pearl Fountain',
            album: 'Warlord',
            year: 2016,
            difficulty: 'normal',
            localAudioPath: 'assets/audio/Pearl Fountain_spotdown.org.mp3',
            chorusStart: 40,
            isReleased: true,
            source: 'local'
        },
        {
            id: 'local_42',
            title: 'Stars Align',
            album: 'Warlord',
            year: 2016,
            difficulty: 'normal',
            localAudioPath: 'assets/audio/Stars Align_spotdown.org.mp3',
            chorusStart: 40,
            isReleased: true,
            source: 'local'
        },
        {
            id: 'local_43',
            title: 'Shine',
            album: 'Warlord',
            year: 2016,
            difficulty: 'normal',
            localAudioPath: 'assets/audio/Shine_spotdown.org.mp3',
            chorusStart: 40,
            isReleased: true,
            source: 'local'
        },
        // Stranger (2017)
        {
            id: 'local_44',
            title: 'Muddy Sea',
            album: 'Stranger',
            year: 2017,
            difficulty: 'normal',
            localAudioPath: 'assets/audio/Muddy Sea_spotdown.org.mp3',
            chorusStart: 40,
            isReleased: true,
            source: 'local'
        },
        {
            id: 'local_45',
            title: 'Red Bottom Sky',
            album: 'Stranger',
            year: 2017,
            difficulty: 'normal',
            localAudioPath: 'assets/audio/Red Bottom Sky_spotdown.org.mp3',
            chorusStart: 40,
            isReleased: true,
            source: 'local'
        },
        {
            id: 'local_46',
            title: 'Skimask',
            album: 'Stranger',
            year: 2017,
            difficulty: 'normal',
            localAudioPath: 'assets/audio/Skimask_spotdown.org.mp3',
            chorusStart: 40,
            isReleased: true,
            source: 'local'
        },
        {
            id: 'local_47',
            title: 'Silver Arrows',
            album: 'Stranger',
            year: 2017,
            difficulty: 'normal',
            localAudioPath: 'assets/audio/Silver Arrows_spotdown.org.mp3',
            chorusStart: 40,
            isReleased: true,
            source: 'local'
        },
        {
            id: 'local_48',
            title: 'Metallic Intuition',
            album: 'Stranger',
            year: 2017,
            difficulty: 'normal',
            localAudioPath: 'assets/audio/Metallic Intuition_spotdown.org.mp3',
            chorusStart: 40,
            isReleased: true,
            source: 'local'
        },
        {
            id: 'local_49',
            title: 'Push / Lost Weekend',
            album: 'Stranger',
            year: 2017,
            difficulty: 'normal',
            localAudioPath: 'assets/audio/Push _ Lost Weekend_spotdown.org.mp3',
            chorusStart: 40,
            isReleased: true,
            source: 'local'
        },
        {
            id: 'local_50',
            title: 'Salute / Pacman',
            album: 'Stranger',
            year: 2017,
            difficulty: 'normal',
            localAudioPath: 'assets/audio/Salute _ Pacman_spotdown.org.mp3',
            chorusStart: 40,
            isReleased: true,
            source: 'local'
        },
        {
            id: 'local_51',
            title: 'Drop It / Scooter',
            album: 'Stranger',
            year: 2017,
            difficulty: 'normal',
            localAudioPath: 'assets/audio/Drop It _ Scooter_spotdown.org.mp3',
            chorusStart: 40,
            isReleased: true,
            source: 'local'
        },
        {
            id: 'local_52',
            title: 'Hunting My Own Skin',
            album: 'Stranger',
            year: 2017,
            difficulty: 'normal',
            localAudioPath: 'assets/audio/Hunting My Own Skin_spotdown.org.mp3',
            chorusStart: 40,
            isReleased: true,
            source: 'local'
        },
        {
            id: 'local_53',
            title: 'Iceman',
            album: 'Stranger',
            year: 2017,
            difficulty: 'normal',
            localAudioPath: 'assets/audio/Iceman_spotdown.org.mp3',
            chorusStart: 40,
            isReleased: true,
            source: 'local'
        },
        {
            id: 'local_54',
            title: 'Snakeskin / Bullets',
            album: 'Stranger',
            year: 2017,
            difficulty: 'normal',
            localAudioPath: 'assets/audio/Snakeskin _ Bullets_spotdown.org.mp3',
            chorusStart: 40,
            isReleased: true,
            source: 'local'
        },
        {
            id: 'local_55',
            title: 'Fallen Demon',
            album: 'Stranger',
            year: 2017,
            difficulty: 'normal',
            localAudioPath: 'assets/audio/Fallen Demon_spotdown.org.mp3',
            chorusStart: 40,
            isReleased: true,
            source: 'local'
        },
        {
            id: 'local_56',
            title: 'Agony',
            album: 'Stranger',
            year: 2017,
            difficulty: 'normal',
            localAudioPath: 'assets/audio/Agony_spotdown.org.mp3',
            chorusStart: 40,
            isReleased: true,
            source: 'local'
        },
        {
            id: 'local_57',
            title: 'Yellowman',
            album: 'Stranger',
            year: 2017,
            difficulty: 'normal',
            localAudioPath: 'assets/audio/Yellowman_spotdown.org.mp3',
            chorusStart: 40,
            isReleased: true,
            source: 'local'
        },
        // Starz (2020)
        {
            id: 'local_58',
            title: 'My Agenda',
            album: 'Starz',
            year: 2020,
            difficulty: 'normal',
            localAudioPath: 'assets/audio/My Agenda_spotdown.org.mp3',
            chorusStart: 40,
            isReleased: true,
            source: 'local'
        },
        {
            id: 'local_59',
            title: 'Yayo',
            album: 'Starz',
            year: 2020,
            difficulty: 'normal',
            localAudioPath: 'assets/audio/Yayo_spotdown.org.mp3',
            chorusStart: 40,
            isReleased: true,
            source: 'local'
        },
        {
            id: 'local_60',
            title: 'Boylife in EU',
            album: 'Starz',
            year: 2020,
            difficulty: 'normal',
            localAudioPath: 'assets/audio/Boylife in EU_spotdown.org.mp3',
            chorusStart: 40,
            isReleased: true,
            source: 'local'
        },
        {
            id: 'local_61',
            title: 'Violence',
            album: 'Starz',
            year: 2020,
            difficulty: 'normal',
            localAudioPath: 'assets/audio/Violence_spotdown.org.mp3',
            chorusStart: 40,
            isReleased: true,
            source: 'local'
        },
        {
            id: 'local_62',
            title: 'Outta My Head',
            album: 'Starz',
            year: 2020,
            difficulty: 'normal',
            localAudioPath: 'assets/audio/Outta My Head_spotdown.org.mp3',
            chorusStart: 40,
            isReleased: true,
            source: 'local'
        },
        {
            id: 'local_63',
            title: 'Dance in the Dark',
            album: 'Starz',
            year: 2020,
            difficulty: 'normal',
            localAudioPath: 'assets/audio/Dance in the Dark_spotdown.org.mp3',
            chorusStart: 40,
            isReleased: true,
            source: 'local'
        },
        {
            id: 'local_64',
            title: 'Acid at 7/11',
            album: 'Starz',
            year: 2020,
            difficulty: 'normal',
            localAudioPath: 'assets/audio/Acid at 7_11_spotdown.org.mp3',
            chorusStart: 40,
            isReleased: true,
            source: 'local'
        },
        {
            id: 'local_65',
            title: 'Starz',
            album: 'Starz',
            year: 2020,
            difficulty: 'normal',
            localAudioPath: 'assets/audio/Starz_spotdown.org.mp3',
            chorusStart: 40,
            isReleased: true,
            source: 'local'
        },
        {
            id: 'local_66',
            title: 'Hellraiser',
            album: 'Starz',
            year: 2020,
            difficulty: 'normal',
            localAudioPath: 'assets/audio/Hellraiser_spotdown.org.mp3',
            chorusStart: 40,
            isReleased: true,
            source: 'local'
        },
        {
            id: 'local_67',
            title: 'Butterfly Paralyzed',
            album: 'Starz',
            year: 2020,
            difficulty: 'normal',
            localAudioPath: 'assets/audio/Butterfly Paralyzed_spotdown.org.mp3',
            chorusStart: 40,
            isReleased: true,
            source: 'local'
        },
        {
            id: 'local_68',
            title: 'Dogboy',
            album: 'Starz',
            year: 2020,
            difficulty: 'normal',
            localAudioPath: 'assets/audio/Dogboy_spotdown.org.mp3',
            chorusStart: 40,
            isReleased: true,
            source: 'local'
        },
        {
            id: 'local_69',
            title: 'Iceheart',
            album: 'Starz',
            year: 2020,
            difficulty: 'normal',
            localAudioPath: 'assets/audio/Iceheart_spotdown.org.mp3',
            chorusStart: 40,
            isReleased: true,
            source: 'local'
        },
        {
            id: 'local_70',
            title: 'Pikachu',
            album: 'Starz',
            year: 2020,
            difficulty: 'normal',
            localAudioPath: 'assets/audio/Pikachu_spotdown.org.mp3',
            chorusStart: 40,
            isReleased: true,
            source: 'local'
        },
        {
            id: 'local_71',
            title: 'Low',
            album: 'Starz',
            year: 2020,
            difficulty: 'normal',
            localAudioPath: 'assets/audio/Low_spotdown.org.mp3',
            chorusStart: 40,
            isReleased: true,
            source: 'local'
        },
        {
            id: 'local_72',
            title: 'Sunset Sunrise',
            album: 'Starz',
            year: 2020,
            difficulty: 'normal',
            localAudioPath: 'assets/audio/Sunset Sunrise_spotdown.org.mp3',
            chorusStart: 40,
            isReleased: true,
            source: 'local'
        },
        {
            id: 'local_73',
            title: 'Put Me in a Spell',
            album: 'Starz',
            year: 2020,
            difficulty: 'normal',
            localAudioPath: 'assets/audio/Put Me in a Spell_spotdown.org.mp3',
            chorusStart: 40,
            isReleased: true,
            source: 'local'
        },
        // Psykos (2024)
        {
            id: 'local_74',
            title: 'Coda',
            album: 'Psykos',
            year: 2024,
            difficulty: 'normal',
            localAudioPath: 'assets/audio/Coda_spotdown.org.mp3',
            chorusStart: 40,
            isReleased: true,
            source: 'local'
        },
        {
            id: 'local_75',
            title: 'Ghosts',
            album: 'Psykos',
            year: 2024,
            difficulty: 'normal',
            localAudioPath: 'assets/audio/Ghosts_spotdown.org.mp3',
            chorusStart: 40,
            isReleased: true,
            source: 'local'
        },
        {
            id: 'local_76',
            title: 'Golden God',
            album: 'Psykos',
            year: 2024,
            difficulty: 'normal',
            localAudioPath: 'assets/audio/Golden God_spotdown.org.mp3',
            chorusStart: 40,
            isReleased: true,
            source: 'local'
        },
        {
            id: 'local_77',
            title: 'Still',
            album: 'Psykos',
            year: 2024,
            difficulty: 'normal',
            localAudioPath: 'assets/audio/Still_spotdown.org.mp3',
            chorusStart: 40,
            isReleased: true,
            source: 'local'
        },
        {
            id: 'local_78',
            title: 'Sold Out',
            album: 'Psykos',
            year: 2024,
            difficulty: 'normal',
            localAudioPath: 'assets/audio/Sold Out_spotdown.org.mp3',
            chorusStart: 40,
            isReleased: true,
            source: 'local'
        },
        {
            id: 'local_79',
            title: 'Hanging From The Bridge',
            album: 'Psykos',
            year: 2024,
            difficulty: 'normal',
            localAudioPath: 'assets/audio/Hanging From The Bridge_spotdown.org.mp3',
            chorusStart: 40,
            isReleased: true,
            source: 'local'
        },
        {
            id: 'local_80',
            title: 'Enemy',
            album: 'Psykos',
            year: 2024,
            difficulty: 'normal',
            localAudioPath: 'assets/audio/Enemy_spotdown.org.mp3',
            chorusStart: 40,
            isReleased: true,
            source: 'local'
        },
        {
            id: 'local_81',
            title: 'Things Happen',
            album: 'Psykos',
            year: 2024,
            difficulty: 'normal',
            localAudioPath: 'assets/audio/Things Happen_spotdown.org.mp3',
            chorusStart: 40,
            isReleased: true,
            source: 'local'
        },
        // Jonatan (2025)
        {
            id: 'local_82',
            title: 'Might Not B',
            album: 'Jonatan',
            year: 2025,
            difficulty: 'normal',
            localAudioPath: 'assets/audio/Might Not B_spotdown.org.mp3',
            chorusStart: 40,
            isReleased: true,
            source: 'local'
        },
        {
            id: 'local_83',
            title: 'Forever Yung',
            album: 'Jonatan',
            year: 2025,
            difficulty: 'normal',
            localAudioPath: 'assets/audio/Forever Yung_spotdown.org.mp3',
            chorusStart: 40,
            isReleased: true,
            source: 'local'
        },
        {
            id: 'local_84',
            title: 'Horses',
            album: 'Jonatan',
            year: 2025,
            difficulty: 'normal',
            localAudioPath: 'assets/audio/Horses_spotdown.org.mp3',
            chorusStart: 40,
            isReleased: true,
            source: 'local'
        },
        {
            id: 'local_85',
            title: 'Paranoid Paparazzi',
            album: 'Jonatan',
            year: 2025,
            difficulty: 'normal',
            localAudioPath: 'assets/audio/Paranoid Paparazzi_spotdown.org.mp3',
            chorusStart: 40,
            isReleased: true,
            source: 'local'
        },
        {
            id: 'local_86',
            title: 'Babyface Maniacs',
            album: 'Jonatan',
            year: 2025,
            difficulty: 'normal',
            localAudioPath: 'assets/audio/Babyface Maniacs_spotdown.org.mp3',
            chorusStart: 40,
            isReleased: true,
            source: 'local'
        },
        {
            id: 'local_87',
            title: "I'm Your Dirt, I'm Your Love",
            album: 'Jonatan',
            year: 2025,
            difficulty: 'normal',
            localAudioPath: "assets/audio/I'm Your Dirt, I'm Your Love_spotdown.org.mp3",            isReleased: true,
            source: 'local'
        },
        {
            id: 'local_88',
            title: 'Teenage Symphonies 4 God',
            album: 'Jonatan',
            year: 2025,
            difficulty: 'normal',
            localAudioPath: 'assets/audio/Teenage Symphonies 4 God (God Will Only)_spotdown.org.mp3',
            chorusStart: 40,
            isReleased: true,
            source: 'local'
        },
        {
            id: 'local_89',
            title: 'Changes',
            album: 'Jonatan',
            year: 2025,
            difficulty: 'normal',
            localAudioPath: 'assets/audio/Changes_spotdown.org.mp3',
            chorusStart: 40,
            isReleased: true,
            source: 'local'
        },
        {
            id: 'local_90',
            title: 'My Life',
            album: 'Jonatan',
            year: 2025,
            difficulty: 'normal',
            localAudioPath: 'assets/audio/My Life_spotdown.org.mp3',
            chorusStart: 40,
            isReleased: true,
            source: 'local'
        },
        {
            id: 'local_91',
            title: 'Swan Song',
            album: 'Jonatan',
            year: 2025,
            difficulty: 'normal',
            localAudioPath: 'assets/audio/Swan Song_spotdown.org.mp3',
            chorusStart: 40,
            isReleased: true,
            source: 'local'
        },
        {
            id: 'local_92',
            title: 'Terminator Symphony',
            album: 'Jonatan',
            year: 2025,
            difficulty: 'normal',
            localAudioPath: 'assets/audio/Terminator Symphony_spotdown.org.mp3',
            chorusStart: 40,
            isReleased: true,
            source: 'local'
        },
        {
            id: 'local_93',
            title: 'Lessons from Above',
            album: 'Jonatan',
            year: 2025,
            difficulty: 'normal',
            localAudioPath: 'assets/audio/Lessons from Above_spotdown.org.mp3',
            chorusStart: 40,
            isReleased: true,
            source: 'local'
        },
        // Singles & Rarities
        {
            id: 'local_94',
            title: 'Oreomilkshake',
            album: 'Singles & Rarities',
            year: 2013,
            difficulty: 'normal',
            localAudioPath: 'assets/audio/Oreomilkshake_spotdown.org.mp3',
            chorusStart: 40,
            isReleased: true,
            source: 'local'
        },
        {
            id: 'local_95',
            title: 'Greygoose',
            album: 'Singles & Rarities',
            year: 2013,
            difficulty: 'normal',
            localAudioPath: 'assets/audio/Greygoose_spotdown.org.mp3',
            chorusStart: 40,
            isReleased: true,
            source: 'local'
        },
        {
            id: 'local_96',
            title: 'Marble Phone',
            album: 'Singles & Rarities',
            year: 2013,
            difficulty: 'normal',
            localAudioPath: 'assets/audio/Marble Phone_spotdown.org.mp3',
            chorusStart: 40,
            isReleased: true,
            source: 'local'
        },
        {
            id: 'local_97',
            title: 'King Cobra',
            album: 'Singles & Rarities',
            year: 2014,
            difficulty: 'normal',
            localAudioPath: 'assets/audio/King Cobra_spotdown.org.mp3',
            chorusStart: 40,
            isReleased: true,
            source: 'local'
        },
        {
            id: 'local_98',
            title: 'Crash Bandicoot',
            album: 'Singles & Rarities',
            year: 2014,
            difficulty: 'normal',
            localAudioPath: 'assets/audio/Crash Bandicoot_spotdown.org.mp3',
            chorusStart: 40,
            isReleased: true,
            source: 'local'
        },
        {
            id: 'local_99',
            title: 'Ghostface / Shyguy',
            album: 'Singles & Rarities',
            year: 2014,
            difficulty: 'normal',
            localAudioPath: 'assets/audio/Ghostface _ Shyguy_spotdown.org.mp3',
            chorusStart: 40,
            isReleased: true,
            source: 'local'
        },
        {
            id: 'local_100',
            title: 'Like Me',
            album: 'Singles & Rarities',
            year: 2015,
            difficulty: 'normal',
            localAudioPath: 'assets/audio/Like Me_spotdown.org.mp3',
            chorusStart: 40,
            isReleased: true,
            source: 'local'
        },
        {
            id: 'local_101',
            title: 'Red Velvet',
            album: 'Singles & Rarities',
            year: 2015,
            difficulty: 'normal',
            localAudioPath: 'assets/audio/Red Velvet_spotdown.org.mp3',
            chorusStart: 40,
            isReleased: true,
            source: 'local'
        },
        {
            id: 'local_102',
            title: 'Creep Creeps',
            album: 'Singles & Rarities',
            year: 2015,
            difficulty: 'normal',
            localAudioPath: 'assets/audio/Creep Creeps_spotdown.org.mp3',
            chorusStart: 40,
            isReleased: true,
            source: 'local'
        },
        {
            id: 'local_103',
            title: '2 Cups',
            album: 'Singles & Rarities',
            year: 2015,
            difficulty: 'normal',
            localAudioPath: 'assets/audio/2 Cups_spotdown.org.mp3',
            chorusStart: 40,
            isReleased: true,
            source: 'local'
        },
        {
            id: 'local_104',
            title: 'Smirnoff Ice',
            album: 'Singles & Rarities',
            year: 2015,
            difficulty: 'normal',
            localAudioPath: 'assets/audio/Smirnoff Ice_spotdown.org.mp3',
            chorusStart: 40,
            isReleased: true,
            source: 'local'
        },
        {
            id: 'local_105',
            title: 'First Class',
            album: 'Singles & Rarities',
            year: 2015,
            difficulty: 'normal',
            localAudioPath: 'assets/audio/First Class_spotdown.org.mp3',
            chorusStart: 40,
            isReleased: true,
            source: 'local'
        },
        {
            id: 'local_106',
            title: 'Blue Plastic',
            album: 'Singles & Rarities',
            year: 2015,
            difficulty: 'normal',
            localAudioPath: 'assets/audio/Blue Plastic_spotdown.org.mp3',
            chorusStart: 40,
            isReleased: true,
            source: 'local'
        },
        {
            id: 'local_107',
            title: 'Opium Dreams',
            album: 'Singles & Rarities',
            year: 2015,
            difficulty: 'normal',
            localAudioPath: 'assets/audio/Opium Dreams_spotdown.org.mp3',
            chorusStart: 40,
            isReleased: true,
            source: 'local'
        },
        {
            id: 'local_108',
            title: 'Lazy Summer Day',
            album: 'Singles & Rarities',
            year: 2015,
            difficulty: 'normal',
            localAudioPath: 'assets/audio/Lazy Summer Day_spotdown.org.mp3',
            chorusStart: 40,
            isReleased: true,
            source: 'local'
        },
        {
            id: 'local_109',
            title: 'Chinese Restaurant',
            album: 'Singles & Rarities',
            year: 2015,
            difficulty: 'normal',
            localAudioPath: 'assets/audio/Chinese Restaurant_spotdown.org.mp3',
            chorusStart: 40,
            isReleased: true,
            source: 'local'
        },
        {
            id: 'local_110',
            title: 'True Love',
            album: 'Singles & Rarities',
            year: 2015,
            difficulty: 'normal',
            localAudioPath: 'assets/audio/True Love_spotdown.org.mp3',
            chorusStart: 40,
            isReleased: true,
            source: 'local'
        },
        {
            id: 'local_111',
            title: 'Victorious',
            album: 'Singles & Rarities',
            year: 2015,
            difficulty: 'normal',
            localAudioPath: 'assets/audio/Victorious_spotdown.org.mp3',
            chorusStart: 40,
            isReleased: true,
            source: 'local'
        },
        {
            id: 'local_112',
            title: 'Bullets',
            album: 'Singles & Rarities',
            year: 2016,
            difficulty: 'normal',
            localAudioPath: 'assets/audio/Bullets_spotdown.org.mp3',
            chorusStart: 40,
            isReleased: true,
            source: 'local'
        },
        {
            id: 'local_113',
            title: 'Violent Lullaby (with Yung Lean)',
            album: 'Singles & Rarities',
            year: 2016,
            difficulty: 'normal',
            localAudioPath: 'assets/audio/Violent Lullaby (with Yung Lean)_spotdown.org.mp3',
            chorusStart: 40,
            isReleased: true,
            source: 'local'
        },
        {
            id: 'local_114',
            title: 'SPIRIT OF THUNDER',
            album: 'Singles & Rarities',
            year: 2016,
            difficulty: 'normal',
            localAudioPath: 'assets/audio/SPIRIT OF THUNDER_spotdown.org.mp3',
            chorusStart: 40,
            isReleased: true,
            source: 'local'
        },
        {
            id: 'local_115',
            title: 'Shadowboxing',
            album: 'Singles & Rarities',
            year: 2016,
            difficulty: 'normal',
            localAudioPath: 'assets/audio/Shadowboxing_spotdown.org.mp3',
            chorusStart: 40,
            isReleased: true,
            source: 'local'
        },
        {
            id: 'local_116',
            title: '360 featuring robyn & yung lean',
            album: 'Singles & Rarities',
            year: 2024,
            difficulty: 'normal',
            localAudioPath: 'assets/audio/360 featuring robyn & yung lean_spotdown.org.mp3',
            chorusStart: 40,
            isReleased: true,
            source: 'local'
        },
        {
            id: 'local_117',
            title: 'Inferno',
            album: 'Singles & Rarities',
            year: 2017,
            difficulty: 'normal',
            localAudioPath: 'assets/audio/Inferno_spotdown.org.mp3',
            chorusStart: 40,
            isReleased: true,
            source: 'local'
        },
        {
            id: 'local_118',
            title: 'Evil World',
            album: 'Singles & Rarities',
            year: 2017,
            difficulty: 'normal',
            localAudioPath: 'assets/audio/Evil World_spotdown.org.mp3',
            chorusStart: 40,
            isReleased: true,
            source: 'local'
        },
        {
            id: 'local_119',
            title: 'Advent',
            album: 'Singles & Rarities',
            year: 2017,
            difficulty: 'normal',
            localAudioPath: 'assets/audio/Advent_spotdown.org.mp3',
            chorusStart: 40,
            isReleased: true,
            source: 'local'
        },
        {
            id: 'local_120',
            title: 'Back at It',
            album: 'Singles & Rarities',
            year: 2018,
            difficulty: 'normal',
            localAudioPath: 'assets/audio/Back at It_spotdown.org.mp3',
            chorusStart: 40,
            isReleased: true,
            source: 'local'
        },
        {
            id: 'local_121',
            title: 'Hop Out',
            album: 'Singles & Rarities',
            year: 2018,
            difficulty: 'normal',
            localAudioPath: 'assets/audio/Hop Out_spotdown.org.mp3',
            chorusStart: 40,
            isReleased: true,
            source: 'local'
        },
        {
            id: 'local_122',
            title: 'Hennessy & Sailor Moon',
            album: 'Singles & Rarities',
            year: 2013,
            difficulty: 'normal',
            localAudioPath: 'assets/audio/Hennessy & Sailor Moon_spotdown.org.mp3',
            chorusStart: 40,
            isReleased: true,
            source: 'local'
        },
        {
            id: 'local_123',
            title: 'Cashin',
            album: 'Singles & Rarities',
            year: 2018,
            difficulty: 'normal',
            localAudioPath: 'assets/audio/Cashin_spotdown.org.mp3',
            chorusStart: 40,
            isReleased: true,
            source: 'local'
        },
        {
            id: 'local_124',
            title: 'Crystal City',
            album: 'Singles & Rarities',
            year: 2018,
            difficulty: 'normal',
            localAudioPath: 'assets/audio/Crystal City_spotdown.org.mp3',
            chorusStart: 40,
            isReleased: true,
            source: 'local'
        },
        {
            id: 'local_125',
            title: 'Kirby',
            album: 'Singles & Rarities',
            year: 2018,
            difficulty: 'normal',
            localAudioPath: 'assets/audio/Kirby_spotdown.org.mp3',
            chorusStart: 40,
            isReleased: true,
            source: 'local'
        },
        {
            id: 'local_126',
            title: 'Head 2 Toe',
            album: 'Singles & Rarities',
            year: 2018,
            difficulty: 'normal',
            localAudioPath: 'assets/audio/Head 2 Toe_spotdown.org.mp3',
            chorusStart: 40,
            isReleased: true,
            source: 'local'
        },
        {
            id: 'local_127',
            title: 'Get It Back',
            album: 'Singles & Rarities',
            year: 2018,
            difficulty: 'normal',
            localAudioPath: 'assets/audio/Get It Back_spotdown.org.mp3',
            chorusStart: 40,
            isReleased: true,
            source: 'local'
        },
        {
            id: 'local_128',
            title: 'happy feet',
            album: 'Singles & Rarities',
            year: 2019,
            difficulty: 'normal',
            localAudioPath: 'assets/audio/happy feet_spotdown.org.mp3',
            chorusStart: 40,
            isReleased: true,
            source: 'local'
        },
        {
            id: 'local_129',
            title: 'friday the 13th',
            album: 'Singles & Rarities',
            year: 2019,
            difficulty: 'normal',
            localAudioPath: 'assets/audio/friday the 13th_spotdown.org.mp3',
            chorusStart: 40,
            isReleased: true,
            source: 'local'
        },
        {
            id: 'local_130',
            title: 'french hotel',
            album: 'Singles & Rarities',
            year: 2019,
            difficulty: 'normal',
            localAudioPath: 'assets/audio/french hotel_spotdown.org.mp3',
            chorusStart: 40,
            isReleased: true,
            source: 'local'
        },
        {
            id: 'local_131',
            title: 'silicon wings',
            album: 'Singles & Rarities',
            year: 2019,
            difficulty: 'normal',
            localAudioPath: 'assets/audio/silicon wings_spotdown.org.mp3',
            chorusStart: 40,
            isReleased: true,
            source: 'local'
        },
        {
            id: 'local_132',
            title: 'ropeman',
            album: 'Singles & Rarities',
            year: 2019,
            difficulty: 'normal',
            localAudioPath: 'assets/audio/ropeman_spotdown.org.mp3',
            chorusStart: 40,
            isReleased: true,
            source: 'local'
        },
        {
            id: 'local_133',
            title: 'trashy',
            album: 'Singles & Rarities',
            year: 2019,
            difficulty: 'normal',
            localAudioPath: 'assets/audio/trashy_spotdown.org.mp3',
            chorusStart: 40,
            isReleased: true,
            source: 'local'
        },
        {
            id: 'local_134',
            title: 'sauron',
            album: 'Singles & Rarities',
            year: 2019,
            difficulty: 'normal',
            localAudioPath: 'assets/audio/sauron_spotdown.org.mp3',
            chorusStart: 40,
            isReleased: true,
            source: 'local'
        },
        {
            id: 'local_135',
            title: 'bender++girlfriend',
            album: 'Singles & Rarities',
            year: 2019,
            difficulty: 'normal',
            localAudioPath: 'assets/audio/bender++girlfriend_spotdown.org.mp3',
            chorusStart: 40,
            isReleased: true,
            source: 'local'
        },
        {
            id: 'local_136',
            title: 'Starz2theRainbow',
            album: 'Singles & Rarities',
            year: 2020,
            difficulty: 'normal',
            localAudioPath: 'assets/audio/Starz2theRainbow_spotdown.org.mp3',
            chorusStart: 40,
            isReleased: true,
            source: 'local'
        },
        {
            id: 'local_137',
            title: 'All the things',
            album: 'Singles & Rarities',
            year: 2021,
            difficulty: 'normal',
            localAudioPath: 'assets/audio/All the things_spotdown.org.mp3',
            chorusStart: 40,
            isReleased: true,
            source: 'local'
        },
        {
            id: 'local_138',
            title: 'Bliss',
            album: 'Singles & Rarities',
            year: 2021,
            difficulty: 'normal',
            localAudioPath: 'assets/audio/Bliss_spotdown.org.mp3',
            chorusStart: 40,
            isReleased: true,
            source: 'local'
        },
        {
            id: 'local_139',
            title: 'Diamonds',
            album: 'Singles & Rarities',
            year: 2021,
            difficulty: 'normal',
            localAudioPath: 'assets/audio/Diamonds_spotdown.org.mp3',
            chorusStart: 40,
            isReleased: true,
            source: 'local'
        },
        {
            id: 'local_140',
            title: 'Gold',
            album: 'Singles & Rarities',
            year: 2021,
            difficulty: 'normal',
            localAudioPath: 'assets/audio/Gold_spotdown.org.mp3',
            chorusStart: 40,
            isReleased: true,
            source: 'local'
        },
        {
            id: 'local_141',
            title: "Its Sad Boy (feat. Yung Lean)",
            album: 'Singles & Rarities',
            year: 2021,
            difficulty: 'normal',
            localAudioPath: 'assets/audio/Its Sad Boy (feat. Yung Lean)_spotdown.org.mp3',            isReleased: true,
            source: 'local'
        },
        {
            id: 'local_142',
            title: 'Letting it all go',
            album: 'Singles & Rarities',
            year: 2021,
            difficulty: 'normal',
            localAudioPath: 'assets/audio/Letting it all go_spotdown.org.mp3',
            chorusStart: 40,
            isReleased: true,
            source: 'local'
        },
        {
            id: 'local_143',
            title: 'Lips',
            album: 'Singles & Rarities',
            year: 2021,
            difficulty: 'normal',
            localAudioPath: 'assets/audio/Lips_spotdown.org.mp3',
            chorusStart: 40,
            isReleased: true,
            source: 'local'
        },
        {
            id: 'local_144',
            title: 'Nobody else',
            album: 'Singles & Rarities',
            year: 2021,
            difficulty: 'normal',
            localAudioPath: 'assets/audio/Nobody else_spotdown.org.mp3',
            chorusStart: 40,
            isReleased: true,
            source: 'local'
        },
        {
            id: 'local_145',
            title: 'Paradise Lost',
            album: 'Singles & Rarities',
            year: 2021,
            difficulty: 'normal',
            localAudioPath: 'assets/audio/Paradise Lost_spotdown.org.mp3',
            chorusStart: 40,
            isReleased: true,
            source: 'local'
        },
        {
            id: 'local_146',
            title: 'PARASAIL (feat. Yung Lean & Dave Chappelle)',
            album: 'Singles & Rarities',
            year: 2021,
            difficulty: 'normal',
            localAudioPath: 'assets/audio/PARASAIL (feat. Yung Lean & Dave Chappelle)_spotdown.org.mp3',
            chorusStart: 40,
            isReleased: true,
            source: 'local'
        },
        {
            id: 'local_147',
            title: 'SummerTime Blood',
            album: 'Singles & Rarities',
            year: 2021,
            difficulty: 'normal',
            localAudioPath: 'assets/audio/SummerTime Blood_spotdown.org.mp3',
            chorusStart: 40,
            isReleased: true,
            source: 'local'
        },
        {
            id: 'local_148',
            title: 'Trip',
            album: 'Singles & Rarities',
            year: 2021,
            difficulty: 'normal',
            localAudioPath: 'assets/audio/Trip_spotdown.org.mp3',
            chorusStart: 40,
            isReleased: true,
            source: 'local'
        },
        {
            id: 'local_149',
            title: 'Waterfall',
            album: 'Singles & Rarities',
            year: 2021,
            difficulty: 'normal',
            localAudioPath: 'assets/audio/Waterfall_spotdown.org.mp3',
            chorusStart: 40,
            isReleased: true,
            source: 'local'
        }
    ],

    // ===== HARDCORE MODE - Unreleased/Rare Tracks =====
    hardcore: [
        // These will use local audio files
        // User needs to add audio files to assets/audio/hardcore/
        {
            id: 'hc_1',
            title: 'Oceans 2001',
            album: 'Unreleased',
            year: 2013,
            difficulty: 'hardcore',
            localAudioPath: 'assets/audio/hardcore/oceans_2001.mp3',
            chorusStart: 40,
            isReleased: false,
            source: 'youtube'
        },
        {
            id: 'hc_2',
            title: 'Motorola',
            album: 'Unreleased',
            year: 2013,
            difficulty: 'hardcore',
            localAudioPath: 'assets/audio/hardcore/motorola.mp3',
            chorusStart: 40,
            isReleased: false,
            source: 'youtube'
        },
        {
            id: 'hc_3',
            title: 'Emails',
            album: 'Unreleased',
            year: 2014,
            difficulty: 'hardcore',
            localAudioPath: 'assets/audio/hardcore/emails.mp3',
            chorusStart: 40,
            isReleased: false,
            source: 'soundcloud'
        },
        {
            id: 'hc_4',
            title: 'Hennessy & Sailor Moon',
            album: 'Unreleased',
            year: 2013,
            difficulty: 'hardcore',
            localAudioPath: 'assets/audio/hardcore/hennessy_sailor_moon.mp3',
            chorusStart: 40,
            isReleased: false,
            source: 'youtube'
        },
        {
            id: 'hc_5',
            title: 'Plastic Boy',
            album: 'Unreleased',
            year: 2014,
            difficulty: 'hardcore',
            localAudioPath: 'assets/audio/hardcore/plastic_boy.mp3',
            chorusStart: 40,
            isReleased: false,
            source: 'soundcloud'
        }
    ]
};

// Spotify Artist ID for Yung Lean
const YUNG_LEAN_SPOTIFY_ID = '5nPOO9iTcrs9k6yFffPxjh';

// Function to get all songs for a difficulty
function getSongsByDifficulty(difficulty) {
    return SONGS_DATABASE[difficulty] || [];
}

// Function to get a random song
function getRandomSong(difficulty) {
    const songs = getSongsByDifficulty(difficulty);
    return songs[Math.floor(Math.random() * songs.length)];
}

// Function to get songs by album
function getSongsByAlbum(albumName) {
    const allSongs = [...SONGS_DATABASE.normal, ...SONGS_DATABASE.hardcore];
    return allSongs.filter(song => song.album === albumName);
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        SONGS_DATABASE,
        YUNG_LEAN_SPOTIFY_ID,
        getSongsByDifficulty,
        getRandomSong,
        getSongsByAlbum
    };
}
