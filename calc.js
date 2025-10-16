const bossstat = {
    
    semias: {
        def: 50120,
        res: 296,
        bosscounterforce: 286,
        bosscounterforcemindmg: 30,
        bossbalforce: 87,
        bossalrlimit: 0
    },
    lucian: {
        def: 49120,
        res: 286,
        bosscounterforce: 266,
        bosscounterforcemindmg: 30,
        bossbalforce: 77,
        bossalrlimit: 0
    },
    morgant: {
        def: 48620,
        res: 281,
        bosscounterforce: 236,
        bosscounterforcemindmg: 30,
        bossbalforce: 72,
        bossalrlimit: 0
    },
    gorbas: {
        def: 47920,
        res: 276,
        bosscounterforce: 216,
        bosscounterforcemindmg: 30,
        bossbalforce: 64,
        bossalrlimit: 0
    },
    spinos: {
        def: 45920,
        res: 261,
        bosscounterforce: 196,
        bosscounterforcemindmg: 30,
        bossbalforce: 56,
        bossalrlimit: 0
    },
    sreng: {
        def: 43920,
        res: 246,
        bosscounterforce: 186,
        bosscounterforcemindmg: 30,
        bossbalforce: 53,
        bossalrlimit: 0
    },
    bres: {
        def: 43860,
        res: 240,
        bosscounterforce: 156,
        bosscounterforcemindmg: 30,
        bossbalforce: 44,
        bossalrlimit: 0
    },
    jarnir: {
        def: 42230,
        res: 226,
        bosscounterforce: 136,
        bosscounterforcemindmg: 30,
        bossbalforce: 37,
        bossalrlimit: 0
    },
    emmet: {
        def: 40180,
        res: 214,
        bosscounterforce: 116,
        bosscounterforcemindmg: 30,
        bossbalforce: 28,
        bossalrlimit: 0
    },
    irusan: {
        def: 38780,
        res: 206,
        bosscounterforce: 116,
        bosscounterforcemindmg: 30,
        bossbalforce: 20,
        bossalrlimit: 0
    },
    enok: {
        def: 37780,
        res: 204,
        bosscounterforce: 116,
        bosscounterforcemindmg: 30,
        bossbalforce: 16,
        bossalrlimit: 0
    },
    ceasair: {
        def: 37780,
        res: 195,
        bosscounterforce: 108,
        bosscounterforcemindmg: 30,
        bossbalforce: 14,
        bossalrlimit: 0
    },
    milo: {
        def: 35920,
        res: 188,
        bosscounterforce: 100,
        bosscounterforcemindmg: 30,
        bossbalforce: 12,
        bossalrlimit: 0
    },
    naberius: {
        def: 34110,
        res: 181,
        bosscounterforce: 92,
        bosscounterforcemindmg: 30,
        bossbalforce: 9,
        bossalrlimit: 0
    },
    romel: {
        def: 32300,
        res: 175,
        bosscounterforce: 88,
        bosscounterforcemindmg: 30,
        bossbalforce: 7,
        bossalrlimit: 0
    },
    special: {
        def: 49120,
        res: 286,
        bosscounterforce: 266,
        bosscounterforcemindmg: 30,
        bossbalforce: 77,
        bossalrlimit: 0
    },
    neamhain: {
        def: 17000,
        res: 90,
        bosscounterforce: 0,
        bosscounterforcemindmg: 100,
        bossbalforce: 0,
        bossalrlimit: 0
    },
    balor: {
        def: 23500,
        res: 123,
        bosscounterforce: 0,
        bosscounterforcemindmg: 100,
        bossbalforce: 0,
        bossalrlimit: 0
    },
    brigit: {
        def: 30000,
        res: 150,
        bosscounterforce: 0,
        bosscounterforcemindmg: 100,
        bossbalforce: 0,
        bossalrlimit: 0
    },
    laura: {
        def: 35500,
        res: 185,
        bosscounterforce: 0,
        bosscounterforcemindmg: 100,
        bossbalforce: 4,
        bossalrlimit: 0
    },
    hell1: {
        def: 29000,
        res: 145,
        bosscounterforce: 0,
        bosscounterforcemindmg: 100,
        bossbalforce: 0,
        bossalrlimit: 0
    },
    hell2: {
        def: 35500,
        res: 185,
        bosscounterforce: 0,
        bosscounterforcemindmg: 100,
        bossbalforce: 0,
        bossalrlimit: 0
    },
    hell3: {
        def: 37280,
        res: 206,
        bosscounterforce: 0,
        bosscounterforcemindmg: 100,
        bossbalforce: 17,
        bossalrlimit: 0
    },
    taros: {
        def: 40000,
        res: 229,
        bosscounterforce: 180,
        bosscounterforcemindmg: 30,
        bossbalforce: 34,
        bossalrlimit: 0
    },
    eisenritter: {
        def: 42850,
        res: 254,
        bosscounterforce: 220,
        bosscounterforcemindmg: 30,
        bossbalforce: 59,
        bossalrlimit: 0
    },
    jordra: {
        def: 45000,
        res: 305,
        bosscounterforce: 300,
        bosscounterforcemindmg: 30,
        bossbalforce: 100,
        bossalrlimit: 0
    },
}

function exec(num) {
    target = event.target.parentElement.parentElement;

    let boss;
    if (document.querySelector('select#boss').value == 'custom')
        boss = {
            def: document.querySelector('input#bossdef').value * 1,
            res: document.querySelector('input#bossres').value * 1,
            bosscounterforce: document.querySelector('input#bosscounterforce').value * 1,
            bosscounterforcemindmg: document.querySelector('input#bosscounterforcemindmg').value * 1,
            bossbalforce: document.querySelector('input#bossbalforce').value * 1,
            bossalrlimit: document.querySelector('input#bossalrlimit').value * 1
        };
    else
        boss = bossstat[document.querySelector('select#boss').value];
    let atk = target.querySelector('input#atk').value * 1;
    let add = target.querySelector('input#add').value * 1;
    let dest = target.querySelector('input#dest').value * 1;
    let bal = target.querySelector('input#bal').value * 1;

    let cri = target.querySelector('input#cri').value * 1;
    let pen = target.querySelector('input#pen').value * 1;
    let swordl;
    let spearl;
    if (num == 1) {
        swordl = document.querySelector('#swordl1').checked;
        spearl = document.querySelector('#spearl1').checked;
    } else if (num == 2) {
        swordl = document.querySelector('#swordl2').checked;
        spearl = document.querySelector('#spearl2').checked;
    }

    dmg = calcdmg(boss, atk, add, dest, bal, cri, pen, swordl, spearl);

    target.querySelector('input#totatt').value = Math.round(dmg[2] * 100) / 100;
    target.querySelector('input#nocritdmg').value = Math.round(dmg[0] * 100) / 100;
    target.querySelector('input#critdmg').value = Math.round(dmg[1] * 100) / 100;

        // class로 변경된 zoneinfo 요소를 찾습니다.
    let zoneInfoSpan = target.querySelector('.zoneinfo'); 
    zoneInfoSpan.innerText = dmg[3]; // 텍스트 설정
    let zoneNumber = dmg[4]; // 구간 번호

    // 구간 번호에 따라 색상 변경
    switch (zoneNumber) {
        case 1:
            zoneInfoSpan.style.color = 'blue'; // 1구간 색상
            break;
        case 2:
            zoneInfoSpan.style.color = 'darkgreen'; // 2구간 색상
            break;
        case 3:
            zoneInfoSpan.style.color = 'red'; // 3구간 색상
            break;
        default:
            zoneInfoSpan.style.color = 'black';
    }

  
    
}

function calcdmg(boss, atk, add, dest, bal, cri, pen, swordl, spearl) {
    // Step 1: 초과 공격력(x) 계산
    const raw_x = atk - boss.def;

    let curved_atk;
    let zone_info_text; // 구간 정보를 저장할 변수 추가
    let zone_number;
    let efficiency; // 효율 계산을 위한 변수



    // Step 2 : Zone 1, 2, 3 함수 적용하여 '점감된 공격력' 계산
    if (raw_x <= 4000) {
        curved_atk = raw_x; // Zone 1
        efficiency = 100.0;
        zone_info_text = `(1구간, 효율: ${efficiency.toFixed(1)}%)`;
        zone_number = 1;
    } else if (raw_x <= 22000) {
        curved_atk = -0.000025 * raw_x**2 + 1.2 * raw_x - 400; // Zone 2
        efficiency = (-0.00005 * raw_x + 1.2) * 100;
        zone_info_text = `(2구간, 효율: ${efficiency.toFixed(1)}%)`;
        zone_number = 2;
    } else {
        curved_atk = 0.1 * raw_x + 11700; // Zone 3;
        efficiency = 10.0;
        zone_info_text = `(3구간, 효율: ${efficiency.toFixed(1)}%)`;
        zone_number = 3;
    }

    // Step 3: '방관 보너스' 합산하여 '최종 유효 공격력' 도출
    const applied_atk = Math.max(0, curved_atk + (pen * 8));
    
    // Step 4: '최종 유효 공격력' 기반으로 기본 데미지(base) 계산 (fx 공식)
    let base;
    if (applied_atk <= (boss.def * 2)) {
        let x_base = (applied_atk + 900) / (boss.def + 900);
        let fx = 0.1856 + 0.5525 * x_base + 0.4214 * x_base**2 - 0.3094 * x_base**3 + 0.3643 * x_base**4 - 0.2144 * x_base**5;
        base = (boss.def + 900) * fx;
    } else {
        base = (boss.def + 900) + (applied_atk - 2 * boss.def);
    }

        // Step 5: '최종 유효 공격력' 기반으로 ADM 계수 계산
    let adm;
    if (applied_atk <= 3000)
        adm = 1.875;
    else if (applied_atk <= 10000)
        adm = 6.25 * applied_atk / 10000;
    else
        adm = 6.25 + (applied_atk - 10000) / 2400;

    // Step 6: 밸런스, 추가피해 적용하여 '파괴력 적용 전' 데미지 계산
    const effective_bal = Math.min(Math.max(0, bal - boss.bossbalforce), 100);

    let effcrit;
    if (swordl) effcrit = Math.max(Math.min(65, cri + 15 - boss.res), 3);
    else if (spearl) effcrit = Math.max(Math.min(65, cri + 15 - boss.res), 3);
    else effcrit = Math.max(Math.min(50, cri - boss.res), 3);

    let nocrit_base = (base + add * adm) * (effective_bal + 100) / 200;
    // Step 7: '파괴력' 최종 증뎀 적용
    // 참고: 12050/11550 초과 3배 가중치는 편의상 dest 스탯 자체에 미리 계산된 것으로 가정
    let final_nocrit_dmg = nocrit_base * (1 + dest / 100000 * 2.2);

    let critdmg;
    if (swordl) critdmg = final_nocrit_dmg * (2.25 * (effcrit / 100) + 1 * ((100 - effcrit) / 100));
    else critdmg = final_nocrit_dmg * (1.95 * (effcrit / 100) + 1 * ((100 - effcrit) / 100));

    let totatt = 0;
    totatt = applied_atk + boss.def - pen * 8;
    return [final_nocrit_dmg, critdmg, totatt, zone_info_text, zone_number];
}



/*
function calcdmg_old(boss, atk, add, alr, bal, cri, counterforce, swordl, spearl) {
    let att = Math.max(Math.min(10000 + alr, atk - boss.def), 0);
    let base;
    if (att <= (boss.def * 2)) {
        let x = (att + 900) / (boss.def + 900);
        let fx = 0.1856 + 0.5525 * x + 0.4214 * Math.pow(x, 2) - 0.3094 * Math.pow(x, 3) + 0.3643 * Math.pow(x, 4) - 0.2144 * Math.pow(x, 5);
        base = (boss.def + 900) * fx;
    } else {
        base = (boss.def + 900) + (att - 2 * boss.def);
    }

    let adm;
    if (att <= 3000)
        adm = 1.875;
    else if (att <= 10000)
        adm = 6.25 * att / 10000;
    else
        adm = 6.25 + (att - 10000) / 2400;

    let effcrit;
    if (swordl) effcrit = Math.max(Math.min(65, cri + 15 - boss.res), 3);
    else if (spearl) effcrit = Math.max(Math.min(65, cri + 22 - boss.res), 3);
    else effcrit = Math.max(Math.min(50, cri - boss.res), 3);

    let nocritdmg = (base + add * adm) * (bal + 100) / 200;
    if (boss.bosscounterforce > 0) {
        let ddm = Math.min((boss.bosscounterforcemindmg + (70 * counterforce / (boss.bosscounterforce + 100))), 100) / 100;
        nocritdmg = nocritdmg * ddm;
    }

    let critdmg;
    if (swordl) critdmg = nocritdmg * (2.25 * (effcrit / 100) + 1 * ((100 - effcrit) / 100));
    else critdmg = nocritdmg * (1.95 * (effcrit / 100) + 1 * ((100 - effcrit) / 100));

    return [nocritdmg, critdmg];
}
*/
function compare() {
    let comptype;
    if (document.querySelector('#compcrit').checked) comptype = 'crit';
    else if (document.querySelector('#compnocrit').checked) comptype = 'nocrit';

    let dmg1, dmg2;
    if (comptype == 'crit') {
        dmg1 = document.querySelector('#calc1 input#critdmg').value * 1;
        dmg2 = document.querySelector('#calc2 input#critdmg').value * 1;
    } else if (comptype == 'nocrit') {
        dmg1 = document.querySelector('#calc1 input#nocritdmg').value * 1;
        dmg2 = document.querySelector('#calc2 input#nocritdmg').value * 1;
    }

    let inputdeal1 = document.querySelector('#compare #input input#deal1').value * 1;
    let inputdeal2 = document.querySelector('#compare #input input#deal2').value * 1;

    let samespecdeal1 = inputdeal1 * 100000 / dmg1;
    let samespecdeal2 = inputdeal2 * 100000 / dmg2;

    let outputdeal1 = samespecdeal1 / (samespecdeal1 + samespecdeal2) * 100;
    let outputdeal2 = samespecdeal2 / (samespecdeal1 + samespecdeal2) * 100;

    document.querySelector('#compare #output input#deal1').value = Math.round(outputdeal1 * 100) / 100;
    document.querySelector('#compare #output input#deal2').value = Math.round(outputdeal2 * 100) / 100;
}

function timecalc(num) {
    let comptype;
    if (document.querySelector('#compcrit').checked) comptype = 'crit';
    else if (document.querySelector('#compnocrit').checked) comptype = 'nocrit';

    let boss;
    let swordl, spearl;
    if (document.querySelector('select#boss').value == 'custom')
        boss = {
            def: document.querySelector('input#bossdef').value * 1,
            res: document.querySelector('input#bossres').value * 1,
            bosscounterforce: document.querySelector('input#bosscounterforce').value * 1,
            bosscounterforcemindmg: document.querySelector('input#bosscounterforcemindmg').value * 1
        };
    else
        boss = bossstat[document.querySelector('select#boss').value];
    if (num == 1) {
        swordl = document.querySelector('#swordl1').checked;
        spearl = document.querySelector('#spearl1').checked;
    } else if (num == 2) {
        swordl = document.querySelector('#swordl2').checked;
        spearl = document.querySelector('#spearl2').checked;
    }

    let dmg, fullspecdmg, inputtime, fullspectime, timedeal;

    if (num == 1) {
        if (comptype == 'crit') {
            dmg = document.querySelector('#calc1 input#critdmg').value * 1;
            fullspecdmg = calcdmg(boss, 99999, 9600, 30000, 300, 999, 999, swordl, spearl)[1];
        } else if (comptype == 'nocrit') {
            dmg = document.querySelector('#calc1 input#nocritdmg').value * 1;
            fullspecdmg = calcdmg(boss, 99999, 9600, 30000, 300, 999, 999, swordl, spearl)[0];
        }
        inputtime = document.querySelector('#timecalc #input input#min1').value * 1 + document.querySelector('#timecalc #input input#sec1').value * 1 / 60;
        timedeal = document.querySelector('#timecalc #input input#timedeal1').value * 1;
    } else if (num == 2) {
        if (comptype == 'crit') {
            dmg = document.querySelector('#calc2 input#critdmg').value * 1;
            // (boss, atk, add, alr, bal, cri, counterforce, swordl, spearl)
            fullspecdmg = calcdmg(boss, 99999, 9600, 30000, 300, 999, 999, swordl, spearl)[1];
        } else if (comptype == 'nocrit') {
            dmg = document.querySelector('#calc2 input#nocritdmg').value * 1;
            fullspecdmg = calcdmg(boss, 99999, 9600, 30000, 300, 999, 999, swordl, spearl)[0];
        }
        inputtime = document.querySelector('#timecalc #input input#min2').value * 1 + document.querySelector('#timecalc #input input#sec2').value * 1 / 60;
        timedeal = document.querySelector('#timecalc #input input#timedeal2').value * 1;
    }

    fullspectime = inputtime * dmg / fullspecdmg * 100 / timedeal;

    fullspecmin = Math.floor(fullspectime);
    fullspecsec = Math.round((fullspectime - fullspecmin) * 60);
    fullspecdpm = Math.round((100 / fullspectime * 100)) / 100;

    if (num == 1) {
        document.querySelector('#timecalc #output input#min1').value = fullspecmin;
        document.querySelector('#timecalc #output input#sec1').value = fullspecsec;
        document.querySelector('#timecalc #output input#dpm1').value = fullspecdpm;
    } else if (num == 2) {
        document.querySelector('#timecalc #output input#min2').value = fullspecmin;
        document.querySelector('#timecalc #output input#sec2').value = fullspecsec;
        document.querySelector('#timecalc #output input#dpm2').value = fullspecdpm;
    }
}