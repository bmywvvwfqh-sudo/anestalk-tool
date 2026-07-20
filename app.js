// AnesTalk - Core Application Logic (RadioTalk Aligned & Dual Interactive Upgrade)

// Preset Commands Dictionary for Anesthesiology
const PRESET_COMMANDS = {
    preop: [
        {
            id: 'npo_check',
            type: 'preop',
            icon: 'fa-utensils',
            title: '最後一次喝水或吃東西是什麼時候？',
            translations: {
                korean: { text: '마지막으로 물이나 음식은 언제 드셨나요?', romaji: 'Majimak-euro mul-ina eumsik-eun eonje deusyeossnayo?' },
                english: { text: 'When was the last time you ate or drank anything?', romaji: 'When last ate or drank' },
                japanese: { text: '最後に水や食べ物を摂ったのはいつですか？', romaji: 'Saigo ni mizu ya tabemono wo totta no wa itsu desu ka?' },
                vietnamese: { text: 'Lần cuối cùng bạn ăn hoặc uống là khi nào?', romaji: 'Lần cuối ăn uống khi nào' },
                thai: { text: 'คุณกินอาหารหรือดื่มน้ำครั้งสุดท้ายเมื่อไหร่?', romaji: 'Hai-chai khao sutsai muea-rai' },
                indonesian: { text: 'Kapan terakhir kali Anda makan atau minum?', romaji: 'Kapan terakhir makan minum' },
                filipino: { text: 'Kailan ang huling beses na kumain o uminom ka?', romaji: 'Kailan huling kumain o uminom' }
            }
        },
        {
            id: 'airway_check',
            type: 'preop',
            icon: 'fa-tooth',
            title: '請問是否有假牙、鬆動的牙齒或過敏史？',
            translations: {
                korean: { text: '틀니나 흔들리는 치아, 알레르기가 있으신가요?', romaji: 'Teullina heundeullineun chia, allergeega isseusingayo?' },
                english: { text: 'Do you have any dentures, loose teeth, or allergies?', romaji: 'Dentures, loose teeth, or allergies' },
                japanese: { text: '義歯、ぐらついている歯、またはアレルギーはありますか？', romaji: 'Gishi, guratsukuba, allergic' },
                vietnamese: { text: 'Bạn có răng giả, răng lung lay, hoặc tiền sử dị ứng không?', romaji: 'Răng giả, dị ứng không' },
                thai: { text: 'คุณมีฟันปลอม ฟันโยก หรือประวัติแพ้ยาหรือไม่?', romaji: 'Fan-plom fan-yok phae-ya' },
                indonesian: { text: 'Apakah Anda memiliki gigi palsu, gigi goyang, atau riwayat alergi?', romaji: 'Gigi palsu, alergi' },
                filipino: { text: 'Mayroon ka bang pustiso, umuugang ngipin, o mga alerhiya?', romaji: 'Pustiso, umuugang ngipin, alerhiya' }
            }
        },
        {
            id: 'history_check',
            type: 'preop',
            icon: 'fa-heart-pulse',
            title: '是否有心臟病、高血壓、哮喘或糖尿病？',
            translations: {
                korean: { text: '심장병, 고혈압, 천식 또는 당뇨병이 있으신가요?', romaji: 'Simjangbyeong, gohyeol-ap, cheonsik, dangnyobyeong' },
                english: { text: 'Do you have heart disease, high blood pressure, asthma, or diabetes?', romaji: 'Heart disease, hypertension, asthma, diabetes' },
                japanese: { text: '心臓病、高血圧、喘息、または糖尿病はありますか？', romaji: 'Shinzoubyou, kouketsuatsu, zensoku' },
                vietnamese: { text: 'Bạn có bệnh tim, cao huyết áp, hen suyễn hoặc tiểu đường không?', romaji: 'Bệnh tim, huyết áp, tiểu đường' },
                thai: { text: 'คุณมีโรคหัวใจ ความดันโลหิตสูง หอบหืด หรือเบาหวานหรือไม่?', romaji: 'Rok-huajai khuam-dan huan-huat' },
                indonesian: { text: 'Apakah Anda memiliki penyakit jantung, tekanan darah tinggi, asma, atau diabetes?', romaji: 'Penyakit jantung, tekanan darah' },
                filipino: { text: 'Mayroon ka bang sakit sa puso, mataas na presyon ng dugo, hika, o diabetes?', romaji: 'Sakit sa puso, presyon ng dugo' }
            }
        },
        {
            id: 'consent_explain',
            type: 'preop',
            icon: 'fa-file-signature',
            title: '這是麻醉同意書，我會為您進行麻醉，請確認。',
            translations: {
                korean: { text: '이것은 마취 동의서입니다. 마취를 진행할 테니 확인해 주세요.', romaji: 'Machwi dong-uiseo-imnida' },
                english: { text: 'This is the anesthesia consent form. I will administer your anesthesia.', romaji: 'Anesthesia consent form' },
                japanese: { text: 'これは麻酔同意書です。これから麻酔を行いますのでご確認ください。', romaji: 'Kore wa mashui douisho desu' },
                vietnamese: { text: 'Đây là bản đồng ý gây mê. Tôi sẽ tiến hành gây mê cho bạn.', romaji: 'Bản đồng ý gây mê' },
                thai: { text: 'นี่คือใบยินยอมการวางยาชา/ยาสลบ ฉันจะทำการวางยาให้คุณ', romaji: 'Bai yin-yom kan wang ya' },
                indonesian: { text: 'Ini adalah formulir persetujuan anestesi. Saya akan melakukan anestesi.', romaji: 'Formulir persetujuan anestesi' },
                filipino: { text: 'Ito ang form ng pahintulot sa anestesiya. Magsasagawa ako ng anestesiya.', romaji: 'Form ng pahintulot' }
            }
        }
    ],
    intraop: [
        {
            id: 'spinal_position',
            type: 'posture',
            icon: 'fa-child-reaching',
            title: '請側躺，把膝蓋彎曲縮向胸口像蝦子一樣抱住。',
            translations: {
                korean: { text: '옆으로 누우셔서 무릎을 가슴 쪽으로 끌어당겨 새우처럼 구부려 주세요.', romaji: 'Sae-u-cheoreom guburyeo juseyo' },
                english: { text: 'Please lie on your side and curl up like a shrimp with knees to chest.', romaji: 'Curl up like a shrimp' },
                japanese: { text: '横向きになり、膝を胸に引き寄せてエビのように背中を丸めてください。', romaji: 'Ebi no you ni senaka wo marumete' },
                vietnamese: { text: 'Xin vui lòng nằm nghiêng, cong đầu gối về phía ngực giống như con tôm.', romaji: 'Nằm nghiêng cong đầu gối' },
                thai: { text: 'กรุณานอนตะแคง งอเข่าชิดอกให้เหมือนกุ้ง', romaji: 'Non ta-khaeng ngo khao chid ok' },
                indonesian: { text: 'Silakan berbaring miring dan tekuk lutut Anda ke arah dada seperti udang.', romaji: 'Berbaring miring seperti udang' },
                filipino: { text: 'Mangyaring humiga sa tagiliran at ibaluktot ang tuhod papunta sa dibdib na parang hipon.', romaji: 'Parang hipon' }
            }
        },
        {
            id: 'oxygen_mask',
            type: 'breath-hold',
            icon: 'fa-mask-ventilator',
            title: '這是純氧氣面罩，請放鬆深呼吸，眼睛慢慢閉上。',
            translations: {
                korean: { text: '이것은 산소 마스크입니다. 편안하게 깊게 숨을 쉬시고 눈을 천천히 감으세요.', romaji: 'Sanso maseukeu-imnida. Nuneul gameuseyo' },
                english: { text: 'This is an oxygen mask. Please relax, take deep breaths, and close your eyes.', romaji: 'Oxygen mask. Deep breaths' },
                japanese: { text: '酸素マスクです。リラックスして大きく深呼吸し、ゆっくり目を閉じてください。', romaji: 'Sanso mask desu. Shin-kokyuu wo' },
                vietnamese: { text: 'Đây là mặt nạ oxy. Hãy thư giãn, hít thở sâu và từ từ nhắm mắt lại.', romaji: 'Mặt nạ oxy, hít thở sâu' },
                thai: { text: 'นี่คือหน้ากากออกซิเจน โปรดผ่อนคลาย หายใจเข้าลึกๆ และค่อยๆ หลับตาลง', romaji: 'Naki-kak oxygen. Hai-chai luek' },
                indonesian: { text: 'Ini adalah masker oksigen. Santai, tarik napas dalam-dalam, dan tutup mata Anda.', romaji: 'Masker oksigen, tutup mata' },
                filipino: { text: 'Ito ay maskara ng oksiheno. Mag-relax, huminga nang malalim, at ipikit ang mga mata.', romaji: 'Oksiheno, ipikit ang mata' }
            }
        },
        {
            id: 'do_not_move_med',
            type: 'posture',
            icon: 'fa-hand',
            title: '現在為您注射麻醉藥物，請保持身體不動。',
            translations: {
                korean: { text: '지금 마취약을 주사하고 있습니다. 몸을 움직이지 말고 가만히 계세요.', romaji: 'Momeul umjik-iji malgo gamanhi gyeseyo' },
                english: { text: 'We are administering the anesthetic medication. Please hold completely still.', romaji: 'Hold completely still' },
                japanese: { text: '今から麻酔薬を注射します。お体を動かさずにお待ちください。', romaji: 'Okada wo ugokasazu ni' },
                vietnamese: { text: 'Bây giờ tôi đang tiêm thuốc mê, xin vui lòng giữ nguyên tư thế không di chuyển.', romaji: 'Giữ nguyên không di chuyển' },
                thai: { text: 'ตอนนี้กำลังฉีดยาชา/ยาสลบ โปรดอยู่นิ่งๆ อย่าเคลื่อนไหว', romaji: 'Yat-nui ya kha-yap' },
                indonesian: { text: 'Kami sekarang menyuntikkan obat anestesi. Harap jangan bergerak.', romaji: 'Jangan bergerak' },
                filipino: { text: 'Nag-iiniksyon na kami ng gamot sa anestesiya. Mangyaring huwag gumalaw.', romaji: 'Huwag gumalaw' }
            }
        },
        {
            id: 'breathe_hold_intra',
            type: 'breath-hold',
            icon: 'fa-lungs',
            title: '請大口吸氣，憋住氣。',
            translations: {
                korean: { text: '숨을 들이마시고 참으세요.', romaji: 'Sum-eul deurimasigo chameuseyo' },
                english: { text: 'Breathe in, and hold your breath.', romaji: 'Breathe in and hold' },
                japanese: { text: '息を吸って、止めてください。', romaji: 'Iki wo sutte, tomete kudasai' },
                vietnamese: { text: 'Hít vào, và nín thở.', romaji: 'Hít vào, nín thở' },
                thai: { text: 'หายใจเข้าแล้วกลั้นหายใจไว้', romaji: 'Hai-chai khao luek' },
                indonesian: { text: 'Tarik napas, dan tahan napas Anda.', romaji: 'Tarik napas, tahan napas' },
                filipino: { text: 'Huminga nang malalim, at pigilan ang paghinga.', romaji: 'Huminga, pigilan ang paghinga' }
            }
        }
    ],
    pacu: [
        {
            id: 'pacu_wake',
            type: 'breath-hold',
            icon: 'fa-eye',
            title: '手術順利完成了！請大口吸氣，眼睛睜開。',
            translations: {
                korean: { text: '수술이 잘 끝났습니다! 깊게 숨을 쉬시고 눈을 뜨세요.', romaji: 'Susul-i jal kkeutnassseumnida! Nuneul tteuseyo' },
                english: { text: 'The surgery was successful! Please take deep breaths and open your eyes.', romaji: 'Open your eyes, deep breaths' },
                japanese: { text: '手術が無事に終了しました！大きく息を吸って、目を開けてください。', romaji: 'Me wo akete kudasai' },
                vietnamese: { text: 'Phẫu thuật đã thành công tốt đẹp! Hãy hít thở sâu và mở mắt ra.', romaji: 'Mở mắt ra' },
                thai: { text: 'การผ่าตัดเสร็จสิ้นด้วยดี! โปรดหายใจเข้าลึกๆ และลืมตาขึ้น', romaji: 'Luek-ta khuen' },
                indonesian: { text: 'Operasi berjalan lancar! Silakan tarik napas dalam-dalam dan buka mata Anda.', romaji: 'Buka mata Anda' },
                filipino: { text: 'Matagumpay na natapos ang operasyon! Huminga nang malalim at idilat ang mga mata.', romaji: 'Idilat ang mga mata' }
            }
        },
        {
            id: 'pacu_pain_vas',
            type: 'pacu',
            icon: 'fa-face-grimace',
            title: '傷口現在會痛嗎？如果是 1分微痛到 10分最痛，大約幾分？',
            translations: {
                korean: { text: '상처 부위가 아프신가요? 1점부터 10점 중 몇 점인가요?', romaji: 'Sangcheo buwiga apeusingayo? 1~10jeom' },
                english: { text: 'Are you in pain? On a scale from 1 (mild) to 10 (severe), how bad is the pain?', romaji: 'Pain scale 1 to 10' },
                japanese: { text: '傷口は痛みますか？1から10で言うとどのくらいですか？', romaji: 'Kizuguchi wa itamimasu ka?' },
                vietnamese: { text: 'Vết thương có đau không? Từ 1 đến 10, bạn đau mấy điểm?', romaji: 'Đau mấy điểm' },
                thai: { text: 'เจ็บแผลไหม? จาก 1 ถึง 10 คุณเจ็บระดับไหน?', romaji: 'Jep phae mai?' },
                indonesian: { text: 'Apakah lukanya terasa sakit? Dari skala 1 hingga 10, berapa nilainya?', romaji: 'Skala 1 sampai 10' },
                filipino: { text: 'Masakit ba ang sugat? Sa sukat na 1 hanggang 10, gaano kasakit?', romaji: 'Gaano kasakit' }
            }
        },
        {
            id: 'pacu_nausea',
            type: 'pacu',
            icon: 'fa-face-dizzy',
            title: '會不會覺得想要嘔吐、頭暈或者全身發冷？',
            translations: {
                korean: { text: '구토 증상이나 어지럼증, 혹은 춥고 으슬으슬하신가요?', romaji: 'Guto jeungsang-ina eojireomjeung' },
                english: { text: 'Do you feel nauseous, dizzy, or cold?', romaji: 'Nauseous, dizzy, or cold' },
                japanese: { text: '吐き気、めまい、または寒気はありますか？', romaji: 'Hakike, memai, samuke' },
                vietnamese: { text: 'Bạn có cảm thấy buồn nôn, chóng mặt hoặc bị lạnh không?', romaji: 'Buồn nôn, chóng mặt, lạnh' },
                thai: { text: 'คุณรู้สึกคลื่นไส้ เวียนศีรษะ หรือหนาวสั่นหรือไม่?', romaji: 'Kluen-sai wian-hua' },
                indonesian: { text: 'Apakah Anda merasa mual, pusing, atau kedinginan?', romaji: 'Mual, pusing, kedinginan' },
                filipino: { text: 'Nakakaramdam ka ba ng pagkahilo, pagduduwal, o ginaw?', romaji: 'Pagkahilo, pagduduwal, ginaw' }
            }
        },
        {
            id: 'pacu_safety',
            type: 'posture',
            icon: 'fa-shield-halved',
            title: '請保持躺著，手不要碰拉傷口或管子。',
            translations: {
                korean: { text: '계속 누워 계시고, 손으로 상처나 관을 건드리지 마세요.', romaji: 'Sangcheona gwan-eul geondeuriji maseyo' },
                english: { text: 'Please stay lying down and do not pull on any tubes or touch your wound.', romaji: 'Do not touch wound or tubes' },
                japanese: { text: '横になったままで、手で傷口やチューブに触れないでください。', romaji: 'Kizuguchi ya tube ni furenai de' },
                vietnamese: { text: 'Xin vui lòng tiếp tục nằm và không chạm vào vết thương hoặc dây ống.', romaji: 'Không chạm vết thương' },
                thai: { text: 'โปรดนอนพักผ่อน อย่าใช้มือจับแผลหรือดึงสายยาง', romaji: 'Ya dung sai-yang' },
                indonesian: { text: 'Tetaplah berbaring dan jangan menyentuh luka atau selang.', romaji: 'Jangan sentuh luka' },
                filipino: { text: 'Manatiling nakahiga at huwag hawakan ang sugat o hilahin ang mga tubo.', romaji: 'Huwag hawakan ang sugat' }
            }
        }
    ]
};

// Patient Touch Response Cards
const PATIENT_TOUCH_RESPONSES = [
    {
        id: 'resp_pain_yes',
        icon: 'fa-face-sad-tear',
        tw: '病患反應：傷口很痛！',
        translations: {
            korean: { target: '아파요! (痛)', twText: '病患反應：傷口很痛！' },
            english: { target: 'Painful! (痛)', twText: 'Patient says: In pain!' },
            japanese: { target: '痛いです！ (痛)', twText: '病患反應：傷口很痛！' },
            vietnamese: { target: 'Rất đau! (痛)', twText: 'Bệnh nhân nói: Vết thương rất đau!' },
            thai: { target: 'เจ็บมาก! (痛)', twText: 'คนไข้บอก: เจ็บแผลมาก!' },
            indonesian: { target: 'Sangat sakit! (痛)', twText: 'Pasien berkata: Sangat sakit!' },
            filipino: { target: 'Napakasakit! (痛)', twText: 'Pasabi ng pasyente: Napakasakit!' }
        }
    },
    {
        id: 'resp_pain_no',
        icon: 'fa-face-smile',
        tw: '病患反應：傷口不太會痛。',
        translations: {
            korean: { target: '안 아파요 (不痛)', twText: '病患反應：傷口不太會痛。' },
            english: { target: 'No pain (不痛)', twText: 'Patient says: No pain.' },
            japanese: { target: '痛くないです (不痛)', twText: '病患反應：傷口不太會痛。' },
            vietnamese: { target: 'Không đau (不痛)', twText: 'Bệnh nhân nói: Không đau.' },
            thai: { target: 'ไม่เจ็บ (不痛)', twText: 'คนไข้บอก: ไม่เจ็บ' },
            indonesian: { target: 'Tidak sakit (不痛)', twText: 'Pasien berkata: Tidak sakit.' },
            filipino: { target: 'Hindi masakit (不痛)', twText: 'Pasabi ng pasyente: Hindi masakit.' }
        }
    },
    {
        id: 'resp_nausea_yes',
        icon: 'fa-face-dizzy',
        tw: '病患反應：想吐、頭暈。',
        translations: {
            korean: { target: '구토/어지러움 (想吐)', twText: '病患反應：覺得想吐、頭暈。' },
            english: { target: 'Nauseous/Dizzy (想吐)', twText: 'Patient says: Nauseous and dizzy.' },
            japanese: { target: '気持ち悪い/眩暈 (想吐)', twText: '病患反應：覺得想吐、頭暈。' },
            vietnamese: { target: 'Buồn nôn/Chóng mặt', twText: 'Bệnh nhân nói: Buồn nôn, chóng mặt.' },
            thai: { target: 'คลื่นไส้/เวียนหัว', twText: 'คนไข้บอก: รู้สึกคลื่นไส้ เวียนหัว' },
            indonesian: { target: 'Mual/Pusing (想吐)', twText: 'Pasien berkata: Mual dan pusing.' },
            filipino: { target: 'Kuhilo/Duduwal', twText: 'Pasabi ng pasyente: Nahihilo, naduduwal.' }
        }
    },
    {
        id: 'resp_cold_yes',
        icon: 'fa-temperature-arrow-down',
        tw: '病患反應：覺得很冷、發抖。',
        translations: {
            korean: { target: '춥습니다 (冷)', twText: '病患反應：覺得很冷、全身發抖。' },
            english: { target: 'Feeling cold (冷)', twText: 'Patient says: Feeling very cold.' },
            japanese: { target: '寒いです (冷)', twText: '病患反應：覺得很冷、全身發抖。' },
            vietnamese: { target: 'Rất lạnh (冷)', twText: 'Bệnh nhân nói: Rất lạnh.' },
            thai: { target: 'หนาวมาก (冷)', twText: 'คนไข้บอก: รู้สึกหนาวมาก' },
            indonesian: { target: 'Sangat dingin (冷)', twText: 'Pasien berkata: Sangat dingin.' },
            filipino: { target: 'Napakaginaw (冷)', twText: 'Pasabi ng pasyente: Napakaginaw.' }
        }
    },
    {
        id: 'resp_ok',
        icon: 'fa-thumbs-up',
        tw: '病患反應：聽懂了、好的。',
        translations: {
            korean: { target: '알겠습니다 / OK', twText: '病患反應：聽懂了，沒問題。' },
            english: { target: 'Understood / OK', twText: 'Patient says: Understood / OK.' },
            japanese: { target: '分かりました / OK', twText: '病患反應：聽懂了，沒問題。' },
            vietnamese: { target: 'Đã hiểu / OK', twText: 'Bệnh nhân nói: Đã hiểu.' },
            thai: { target: 'เข้าใจแล้ว / OK', twText: 'คนไข้บอก: เข้าใจแล้ว' },
            indonesian: { target: 'Paham / OK', twText: 'Pasien berkata: Paham / OK.' },
            filipino: { target: 'Naiintindihan / OK', twText: 'Pasabi ng pasyente: Naiintindihan.' }
        }
    }
];

// State Variables
let currentLanguage = 'korean';
let currentTab = 'preop';
let synth = window.speechSynthesis;
let availableVoices = [];
let isDoctorRecording = false;
let isPatientRecording = false;
let doctorRecognition = null;
let patientRecognition = null;

// Speech Language Code Map
const SPEECH_LANG_CODES = {
    korean: 'ko-KR',
    english: 'en-US',
    japanese: 'ja-JP',
    vietnamese: 'vi-VN',
    thai: 'th-TH',
    indonesian: 'id-ID',
    filipino: 'fil-PH'
};

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
    initApp();
});

function initApp() {
    initVoices();
    renderAllGrids();
    renderTouchCards();
    setupEventListeners();
    initSpeechRecognitions();
    setupCustomDbHandlers();
    checkOfflineStatus();
}

// === Custom Phrase Database Storage & Management ===
let CUSTOM_CLINICAL_DATABASE = [];

function loadCustomDatabase() {
    try {
        const saved = localStorage.getItem('ANESTALK_CUSTOM_DB');
        if (saved) {
            CUSTOM_CLINICAL_DATABASE = JSON.parse(saved);
            mergeCustomDatabaseToPreset();
        }
    } catch (e) {
        console.error('Failed to load custom database:', e);
    }
}

function saveCustomDatabase() {
    try {
        localStorage.setItem('ANESTALK_CUSTOM_DB', JSON.stringify(CUSTOM_CLINICAL_DATABASE));
        mergeCustomDatabaseToPreset();
        renderAllGrids();
        renderCustomDbGrid();
    } catch (e) {
        console.error('Failed to save custom database:', e);
    }
}

function mergeCustomDatabaseToPreset() {
    CUSTOM_CLINICAL_DATABASE.forEach(cmd => {
        const cat = cmd.type || 'general';
        if (!PRESET_COMMANDS[cat]) PRESET_COMMANDS[cat] = [];
        PRESET_COMMANDS[cat] = PRESET_COMMANDS[cat].filter(c => c.id !== cmd.id);
        PRESET_COMMANDS[cat].push(cmd);
    });
}

function setupCustomDbHandlers() {
    loadCustomDatabase();
    renderCustomDbGrid();

    const autoFillBtn = document.getElementById('autoFillTransBtn');
    const saveBtn = document.getElementById('saveCustomPhraseBtn');
    const exportBtn = document.getElementById('exportDbBtn');
    const importBtn = document.getElementById('importDbBtn');
    const importFileInput = document.getElementById('importFileInput');

    if (autoFillBtn) {
        autoFillBtn.addEventListener('click', async () => {
            const input = document.getElementById('dbTwInput');
            if (!input || !input.value.trim()) {
                showToast('請先輸入中文語句！');
                return;
            }
            showToast('🪄 AI 正在為您翻譯 7 國語言中...');
            const twText = input.value.trim();
            const langs = [
                { key: 'korean', code: 'ko-KR' },
                { key: 'english', code: 'en-US' },
                { key: 'japanese', code: 'ja-JP' },
                { key: 'vietnamese', code: 'vi-VN' },
                { key: 'thai', code: 'th-TH' },
                { key: 'indonesian', code: 'id-ID' },
                { key: 'filipino', code: 'fil-PH' }
            ];

            const previewGrid = document.getElementById('translationsPreviewGrid');
            if (previewGrid) previewGrid.innerHTML = '';

            for (let l of langs) {
                const trans = await translateAnesthesiaTextAsync(twText, 'zh-TW', l.code);
                if (previewGrid) {
                    const box = document.createElement('div');
                    box.className = 'trans-preview-box';
                    box.innerHTML = `
                        <label>${l.key.toUpperCase()} (${l.code})</label>
                        <input type="text" data-lang="${l.key}" value="${escapeHtml(trans)}">
                    `;
                    previewGrid.appendChild(box);
                }
            }
            showToast('✅ 7 國語言 AI 翻譯完成！請確認後點擊「儲存句庫」');
        });
    }

    if (saveBtn) {
        saveBtn.addEventListener('click', () => {
            const input = document.getElementById('dbTwInput');
            const categorySelect = document.getElementById('dbCategorySelect');
            if (!input || !input.value.trim()) {
                showToast('請先輸入中文語句！');
                return;
            }

            const twText = input.value.trim();
            const category = categorySelect ? categorySelect.value : 'general';
            const id = 'custom_' + Date.now();

            const translations = {};
            const previewInputs = document.querySelectorAll('#translationsPreviewGrid input');
            if (previewInputs.length > 0) {
                previewInputs.forEach(inp => {
                    const lang = inp.dataset.lang;
                    translations[lang] = { text: inp.value, romaji: inp.value };
                });
            } else {
                const defaultLangs = ['korean', 'english', 'japanese', 'vietnamese', 'thai', 'indonesian', 'filipino'];
                defaultLangs.forEach(l => {
                    translations[l] = { text: twText, romaji: twText };
                });
            }

            const newCmd = {
                id: id,
                type: category,
                icon: 'fa-user-pen',
                title: twText,
                translations: translations
            };

            CUSTOM_CLINICAL_DATABASE.push(newCmd);
            saveCustomDatabase();

            input.value = '';
            const previewGrid = document.getElementById('translationsPreviewGrid');
            if (previewGrid) previewGrid.innerHTML = '';

            showToast('🎉 成功儲存自訂句庫！已自動整合至卡片列表');
        });
    }

    if (exportBtn) {
        exportBtn.addEventListener('click', () => {
            const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(CUSTOM_CLINICAL_DATABASE, null, 2));
            const downloadAnchor = document.createElement('a');
            downloadAnchor.setAttribute("href", dataStr);
            downloadAnchor.setAttribute("download", `anestalk_custom_db_${new Date().toISOString().slice(0,10)}.json`);
            document.body.appendChild(downloadAnchor);
            downloadAnchor.click();
            downloadAnchor.remove();
            showToast('📥 句庫備份檔 JSON 匯出成功！');
        });
    }

    if (importBtn && importFileInput) {
        importBtn.addEventListener('click', () => importFileInput.click());
        importFileInput.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (!file) return;
            const reader = new FileReader();
            reader.onload = (event) => {
                try {
                    const imported = JSON.parse(event.target.result);
                    if (Array.isArray(imported)) {
                        CUSTOM_CLINICAL_DATABASE = imported;
                        saveCustomDatabase();
                        showToast('📤 句庫檔 JSON 匯入成功！已更新至資料庫');
                    }
                } catch (err) {
                    showToast('❌ 匯入失敗，請確認檔案格式為 JSON');
                }
            };
            reader.readAsText(file);
        });
    }
}

function renderCustomDbGrid() {
    const grid = document.getElementById('customDbGrid');
    if (!grid) return;

    grid.innerHTML = '';
    if (CUSTOM_CLINICAL_DATABASE.length === 0) {
        grid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 2rem; color: var(--text-muted); font-weight: 600;">
                目前尚無自訂句庫。您可在上方輸入框輸入中文語句，點擊「AI 自動翻譯 7 語」並進行儲存！
            </div>
        `;
        return;
    }

    CUSTOM_CLINICAL_DATABASE.forEach(cmd => {
        const transObj = cmd.translations[currentLanguage] || cmd.translations['english'] || { text: cmd.title, romaji: '' };
        const card = document.createElement('div');
        card.className = 'card';

        card.innerHTML = `
            <div class="card-icon"><i class="fa-solid ${cmd.icon}"></i></div>
            <div class="card-title">${cmd.title}</div>
            <div class="card-translation">${transObj.text}</div>
            <div class="card-footer">
                <button class="delete-phrase-btn" data-id="${cmd.id}">
                    <i class="fa-solid fa-trash-can"></i> 刪除
                </button>
                <div class="play-icon"><i class="fa-solid fa-play"></i></div>
            </div>
        `;

        card.querySelector('.play-icon').addEventListener('click', (e) => {
            e.stopPropagation();
            triggerInstructionCard(cmd, transObj, card);
        });

        card.querySelector('.delete-phrase-btn').addEventListener('click', (e) => {
            e.stopPropagation();
            CUSTOM_CLINICAL_DATABASE = CUSTOM_CLINICAL_DATABASE.filter(c => c.id !== cmd.id);
            for (let cat in PRESET_COMMANDS) {
                PRESET_COMMANDS[cat] = PRESET_COMMANDS[cat].filter(c => c.id !== cmd.id);
            }
            saveCustomDatabase();
            showToast('已刪除自訂句語');
        });

        grid.appendChild(card);
    });
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Initialize SpeechSynthesis Voices
function initVoices() {
    if (!synth) return;
    function loadVoices() {
        availableVoices = synth.getVoices();
    }
    loadVoices();
    if (synth.onvoiceschanged !== undefined) {
        synth.onvoiceschanged = loadVoices;
    }
}

// Render All Preset Grids
function renderAllGrids() {
    renderSectionGrid('preop', 'preopGrid');
    renderSectionGrid('intraop', 'intraopGrid');
    renderSectionGrid('pacu', 'pacuGrid');
}

function renderSectionGrid(sectionKey, gridId) {
    const gridEl = document.getElementById(gridId);
    if (!gridEl) return;

    gridEl.innerHTML = '';
    const commands = PRESET_COMMANDS[sectionKey] || [];

    commands.forEach(cmd => {
        const transObj = cmd.translations[currentLanguage] || cmd.translations['english'];
        const card = document.createElement('div');
        card.className = 'card';
        card.setAttribute('data-id', cmd.id);

        card.innerHTML = `
            <div class="card-icon"><i class="fa-solid ${cmd.icon}"></i></div>
            <div class="card-title">${cmd.title}</div>
            <div class="card-translation">${transObj.text}</div>
            <div class="card-romaji">🗣️ ${transObj.romaji}</div>
            <div class="card-footer">
                <span>點擊播放對話與彈窗</span>
                <div class="play-icon"><i class="fa-solid fa-play"></i></div>
            </div>
        `;

        card.addEventListener('click', () => {
            triggerInstructionCard(cmd, transObj, card);
        });

        gridEl.appendChild(card);
    });
}

// Render Patient Touch Response Cards
function renderTouchCards() {
    const container = document.getElementById('touchCardsGrid');
    if (!container) return;

    container.innerHTML = '';

    PATIENT_TOUCH_RESPONSES.forEach(item => {
        const transObj = item.translations[currentLanguage] || item.translations['english'];
        const card = document.createElement('div');
        card.className = 'touch-card';

        card.innerHTML = `
            <div class="touch-icon"><i class="fa-solid ${item.icon}"></i></div>
            <div class="touch-target">${transObj.target}</div>
            <div class="touch-tw">${item.tw}</div>
        `;

        card.addEventListener('click', () => {
            triggerPatientTouchResponse(item, transObj);
        });

        container.appendChild(card);
    });
}

// Trigger Instruction Card Click
function triggerInstructionCard(cmd, transObj, cardEl) {
    if (cardEl) {
        document.querySelectorAll('.card').forEach(c => c.classList.remove('playing'));
        cardEl.classList.add('playing');
        setTimeout(() => cardEl.classList.remove('playing'), 2500);
    }

    speakText(transObj.text, SPEECH_LANG_CODES[currentLanguage]);
    showPatientOverlay(cmd.title, transObj.text, transObj.romaji, cmd.icon, cmd.type);
    appendDialogueMsg('doctor', '👨‍⚕️ 麻醉醫護 (指令卡片)', cmd.title, transObj.text);
}

// Trigger Patient Touch Response Click
function triggerPatientTouchResponse(item, transObj) {
    speakText(item.tw, 'zh-TW');
    appendDialogueMsg('patient', '👤 病患觸控回覆', transObj.target, item.tw);
    showToast(`病患回應: ${transObj.target} (${item.tw})`);
}

// Fullscreen Patient Overlay Logic
function showPatientOverlay(originalText, targetText, romajiText, iconClass, cmdType) {
    const overlay = document.getElementById('patientOverlay');
    const overlayOriginal = document.getElementById('overlayOriginal');
    const overlayTarget = document.getElementById('overlayTarget');
    const overlayPronunciation = document.getElementById('overlayPronunciation');
    const overlayIcon = document.getElementById('overlayIcon');
    const breathingLabel = document.getElementById('breathingLabel');

    if (!overlay) return;

    overlayOriginal.textContent = originalText;
    overlayTarget.textContent = targetText;
    overlayPronunciation.textContent = romajiText ? `🗣️ ${romajiText}` : '';
    
    if (overlayIcon) {
        overlayIcon.className = `breathing-icon fa-solid ${iconClass || 'fa-lungs'}`;
    }

    if (breathingLabel) {
        if (cmdType === 'breath-hold') {
            breathingLabel.textContent = 'HOLD BREATH / 憋氣';
        } else if (cmdType === 'posture') {
            breathingLabel.textContent = 'HOLD POSITION / 保持姿勢';
        } else {
            breathingLabel.textContent = 'BREATHE IN / 吸氣放鬆';
        }
    }

    overlay.classList.add('active');
}

function hidePatientOverlay() {
    const overlay = document.getElementById('patientOverlay');
    if (overlay) overlay.classList.remove('active');
}

// Web SpeechSynthesis Engine with High-Quality Female Voice Selection & Speech Clarity
function getBestFemaleVoice(langCode) {
    if (!availableVoices || availableVoices.length === 0) {
        availableVoices = synth.getVoices();
    }
    if (!availableVoices || availableVoices.length === 0) return null;

    const prefix = langCode.toLowerCase().substring(0, 2);
    const matchedVoices = availableVoices.filter(v => 
        v.lang.toLowerCase() === langCode.toLowerCase() ||
        v.lang.toLowerCase().replace('_', '-').startsWith(prefix)
    );

    if (matchedVoices.length === 0) return null;

    // High Quality Female & Neural Voice Keywords
    const femaleKeywords = [
        'female', 'woman', 'girl', 'neural', 'natural', 'google', 'premium', 'enhanced', 'online',
        'yuna', 'sunhi', 'heami', 'samantha', 'jenny', 'ava', 'karen', 'victoria', 'aria',
        'kyoko', 'nanami', 'linh', 'hoaimy', 'kanya', 'premwadee', 'damayanti', 'gadis',
        'rosa', 'blessica', 'tingting', 'hsiaochen', 'meijia', 'xiaoxiao'
    ];

    // Priority 1: High Quality / Neural Female Voice
    const bestFemale = matchedVoices.find(v => {
        const name = v.name.toLowerCase();
        return femaleKeywords.some(kw => name.includes(kw));
    });

    if (bestFemale) return bestFemale;

    // Fallback: Return first matching language voice
    return matchedVoices[0];
}

function speakText(text, langCode) {
    if (!synth) {
        showToast('⚠️ 您的瀏覽器不支援語音發音。');
        return;
    }

    if (synth.paused) {
        synth.resume();
    }
    synth.cancel();

    setTimeout(() => {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = langCode || 'en-US';
        utterance.rate = 0.88; // Slightly relaxed speed for ultra-crisp medical articulation
        utterance.pitch = 1.05; // Natural female tone pitch

        // High Quality Female Voice Matching
        const matchedVoice = getBestFemaleVoice(langCode);
        if (matchedVoice) {
            utterance.voice = matchedVoice;
        }

        utterance.onerror = (e) => {
            console.error('SpeechSynthesis error:', e);
        };

        synth.speak(utterance);
    }, 50);
}

// Append Dialogue Message Bubble
function appendDialogueMsg(speaker, speakerTitle, originalText, translatedText) {
    const history = document.getElementById('dialogueHistory');
    if (!history) return;

    const msg = document.createElement('div');
    msg.className = `chat-msg ${speaker === 'doctor' ? 'doctor-msg' : 'patient-msg'}`;

    msg.innerHTML = `
        <div class="msg-header">
            <span>${speakerTitle}</span>
            <span>${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
        </div>
        <div class="msg-original">${escapeHtml(originalText)}</div>
        <div class="msg-translated">${escapeHtml(translatedText)}</div>
    `;

    history.appendChild(msg);
    history.scrollTop = history.scrollHeight;
}

// Event Listeners Setup
function setupEventListeners() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentLanguage = btn.dataset.lang;

            renderAllGrids();
            renderTouchCards();
            updatePatientBoxLabel();
            showToast(`已切換語言：${btn.innerText.trim()}`);
        });
    });

    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentTab = btn.dataset.tab;

            document.querySelectorAll('.instruction-section').forEach(sec => sec.classList.remove('active'));
            const activeSec = document.getElementById(`${currentTab}Section`);
            if (activeSec) activeSec.classList.add('active');
        });
    });

    const closeOverlayBtn = document.getElementById('closeOverlay');
    if (closeOverlayBtn) {
        closeOverlayBtn.addEventListener('click', hidePatientOverlay);
    }
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') hidePatientOverlay();
    });

    const clearDialogueBtn = document.getElementById('clearDialogueBtn');
    if (clearDialogueBtn) {
        clearDialogueBtn.addEventListener('click', () => {
            const history = document.getElementById('dialogueHistory');
            if (history) {
                history.innerHTML = `
                    <div class="chat-msg doctor-msg">
                        <div class="msg-header">
                            <span>👨‍⚕️ 醫護人員 (Doctor / CRNA)</span>
                            <span>對話紀錄重置</span>
                        </div>
                        <div class="msg-original">對話紀錄已成功清空。</div>
                    </div>
                `;
            }
        });
    }

    const playBtn = document.getElementById('playBtn');
    const translateInput = document.getElementById('translateInput');
    const micBtn = document.getElementById('micBtn');

    if (playBtn) {
        playBtn.addEventListener('click', handleCustomTranslate);
    }
    if (translateInput) {
        translateInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') handleCustomTranslate();
        });
    }
    if (micBtn) {
        micBtn.addEventListener('click', toggleCustomMic);
    }
}

function updatePatientBoxLabel() {
    const label = document.getElementById('patientBoxLabel');
    if (!label) return;

    const names = {
        korean: '한국어',
        english: 'English',
        japanese: '日本語',
        vietnamese: 'Tiếng Việt',
        thai: 'ไทย',
        indonesian: 'Indonesia',
        filipino: 'Filipino'
    };

    label.textContent = `👤 病患發言 (${names[currentLanguage] || 'Target'})`;
}

async function handleCustomTranslate() {
    const input = document.getElementById('translateInput');
    if (!input || !input.value.trim()) return;

    const text = input.value.trim();
    input.value = '';

    const targetLangCode = SPEECH_LANG_CODES[currentLanguage] || 'en-US';
    const translated = await translateAnesthesiaTextAsync(text, 'zh-TW', targetLangCode);

    const resultCard = document.getElementById('resultCard');
    const resultLang = document.getElementById('resultLang');
    const resultText = document.getElementById('resultText');

    if (resultCard && resultText) {
        resultLang.textContent = currentLanguage.toUpperCase();
        resultText.textContent = translated;
        resultCard.style.display = 'block';
    }

    speakText(translated, targetLangCode);
    appendDialogueMsg('doctor', '👨‍⚕️ 醫護人員 (自訂口述)', text, translated);
}

// Real-Time Full Sentence Translation Engine (API + Dictionary Fallback)
async function translateAnesthesiaTextAsync(text, fromLang, toLang) {
    if (!text || !text.trim()) return '';

    const langKeyMap = {
        'ko-KR': 'korean', 'ko': 'korean',
        'en-US': 'english', 'en': 'english',
        'ja-JP': 'japanese', 'ja': 'japanese',
        'vi-VN': 'vietnamese', 'vi': 'vietnamese',
        'th-TH': 'thai', 'th': 'thai',
        'id-ID': 'indonesian', 'id': 'indonesian',
        'tl-PH': 'filipino', 'fil-PH': 'filipino', 'tl': 'filipino', 'fil': 'filipino',
        'zh-TW': 'chinese', 'zh': 'chinese'
    };

    const targetKey = langKeyMap[toLang] || toLang;

    // 1. Search in preset commands dictionary first for instant exact match
    for (let sec in PRESET_COMMANDS) {
        const found = PRESET_COMMANDS[sec].find(c => c.title === text.trim() || c.title.includes(text.trim()) || text.trim().includes(c.title));
        if (found && found.translations[targetKey]) {
            return found.translations[targetKey].text;
        }
    }

    // 2. Online Real-Time Translation API (Google GTX endpoint for 100% full translation)
    try {
        const srcCode = fromLang.split('-')[0];
        const tgtCode = toLang.split('-')[0];
        const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${srcCode}&tl=${tgtCode}&dt=t&q=${encodeURIComponent(text)}`;
        const res = await fetch(url);
        if (res.ok) {
            const data = await res.json();
            if (data && data[0] && data[0][0] && data[0][0][0]) {
                return data[0][0][0];
            }
        }
    } catch (e) {
        console.warn('Online translation API unavailable, falling back to local dictionary:', e);
    }

    // 3. Fallback dictionary replacement if offline
    const medicalDict = {
        korean: { "我是你的": "저는 당신의 ", "麻醉科醫師": "마취과 의사입니다.", "麻醉": "마취", "痛": "통증", "深呼吸": "깊은 숨", "不要動": "움직이지 마세요", "睜開眼睛": "눈을 뜨세요", "氧氣": "산소" },
        english: { "我是你的": "I am your ", "麻醉科醫師": "anesthesiologist.", "麻醉": "anesthesia", "痛": "pain", "深呼吸": "deep breath", "不要動": "don't move", "睜開眼睛": "open eyes", "氧氣": "oxygen" },
        japanese: { "我是你的": "私はあなたの", "麻醉科醫師": "麻酔科医です。", "麻醉": "麻酔", "痛": "痛む", "深呼吸": "深呼吸", "不要動": "動かないで", "睜開眼睛": "目を開けて", "氧氣": "酸素" }
    };

    let result = text;
    if (medicalDict[targetKey]) {
        Object.keys(medicalDict[targetKey]).forEach(k => {
            result = result.replace(new RegExp(k, 'g'), medicalDict[targetKey][k]);
        });
    }

    return result;
}

// Dual Speech Recognition Engine with Full Real-time Translation
function initSpeechRecognitions() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
        console.warn('Speech Recognition is not supported in this browser.');
        return;
    }

    // Doctor Recognition (Traditional Chinese zh-TW)
    doctorRecognition = new SpeechRecognition();
    doctorRecognition.continuous = false;
    doctorRecognition.interimResults = false;
    doctorRecognition.lang = 'zh-TW';

    doctorRecognition.onstart = () => {
        isDoctorRecording = true;
        const btn = document.getElementById('doctorDualMicBtn');
        if (btn) btn.classList.add('active');
        showToast('🎙️ 正在聆聽醫護人員中文發言...');
    };

    doctorRecognition.onresult = async (event) => {
        const transcript = event.results[0][0].transcript;
        if (transcript) {
            const targetLangCode = SPEECH_LANG_CODES[currentLanguage] || 'en-US';
            const translated = await translateAnesthesiaTextAsync(transcript, 'zh-TW', targetLangCode);
            appendDialogueMsg('doctor', '👨‍⚕️ 醫護人員 (即時口述)', transcript, translated);
            speakText(translated, targetLangCode);
            showPatientOverlay(transcript, translated, '', 'fa-stethoscope', 'general');
        }
    };

    doctorRecognition.onerror = (event) => {
        console.error('Doctor Speech Recognition Error:', event.error);
        isDoctorRecording = false;
        const btn = document.getElementById('doctorDualMicBtn');
        if (btn) btn.classList.remove('active');

        if (event.error === 'not-allowed' || event.error === 'service-not-allowed') {
            if (window.location.protocol === 'file:') {
                alert('⚠️ 瀏覽器安全限制：直接雙擊 file:// 開啟網頁無法使用麥克風語音辨識。\n\n請以本地網頁伺服器開啟（例如：http://localhost:8000），並允許麥克風權限！');
            } else {
                showToast('❌ 存取麥克風被拒絕，請於瀏覽器權限中開啟麥克風。');
            }
        } else {
            showToast(`麥克風辨識提示: ${event.error === 'no-speech' ? '未偵測到聲音' : event.error}`);
        }
    };

    doctorRecognition.onend = () => {
        isDoctorRecording = false;
        const btn = document.getElementById('doctorDualMicBtn');
        if (btn) btn.classList.remove('active');
    };

    // Patient Recognition (Target Native Language)
    patientRecognition = new SpeechRecognition();
    patientRecognition.continuous = false;
    patientRecognition.interimResults = false;

    patientRecognition.onstart = () => {
        isPatientRecording = true;
        const btn = document.getElementById('patientDualMicBtn');
        if (btn) btn.classList.add('active');
        showToast(`🎤 正在聆聽病患 (${currentLanguage.toUpperCase()}) 發言...`);
    };

    patientRecognition.onresult = async (event) => {
        const transcript = event.results[0][0].transcript;
        if (transcript) {
            const targetLangCode = SPEECH_LANG_CODES[currentLanguage] || 'en-US';
            const translatedTW = await translateAnesthesiaTextAsync(transcript, targetLangCode, 'zh-TW');
            appendDialogueMsg('patient', '👤 病患口述發言', transcript, translatedTW);
            speakText(translatedTW, 'zh-TW');
        }
    };

    patientRecognition.onerror = (event) => {
        console.error('Patient Speech Recognition Error:', event.error);
        isPatientRecording = false;
        const btn = document.getElementById('patientDualMicBtn');
        if (btn) btn.classList.remove('active');

        if (event.error === 'not-allowed' || event.error === 'service-not-allowed') {
            if (window.location.protocol === 'file:') {
                alert('⚠️ 瀏覽器安全限制：直接雙擊 file:// 開啟網頁無法使用麥克風語音辨識。\n\n請以本地網頁伺服器開啟（例如：http://localhost:8000），並允許麥克風權限！');
            } else {
                showToast('❌ 存取麥克風被拒絕，請於瀏覽器權限中開啟麥克風。');
            }
        } else {
            showToast(`病患麥克風辨識提示: ${event.error === 'no-speech' ? '未偵測到聲音' : event.error}`);
        }
    };

    patientRecognition.onend = () => {
        isPatientRecording = false;
        const btn = document.getElementById('patientDualMicBtn');
        if (btn) btn.classList.remove('active');
    };

    const doctorBtn = document.getElementById('doctorDualMicBtn');
    if (doctorBtn) {
        doctorBtn.addEventListener('click', () => {
            if (isDoctorRecording) {
                doctorRecognition.stop();
            } else {
                doctorRecognition.start();
            }
        });
    }

    const patientBtn = document.getElementById('patientDualMicBtn');
    if (patientBtn) {
        patientBtn.addEventListener('click', () => {
            patientRecognition.lang = SPEECH_LANG_CODES[currentLanguage] || 'en-US';
            if (isPatientRecording) {
                patientRecognition.stop();
            } else {
                patientRecognition.start();
            }
        });
    }
}

function toggleCustomMic() {
    if (!doctorRecognition) {
        alert('您的瀏覽器未支援即時語音辨識。');
        return;
    }
    if (isDoctorRecording) doctorRecognition.stop();
    else doctorRecognition.start();
}

function showToast(msg) {
    const toast = document.getElementById('toastNotification');
    if (!toast) return;

    toast.querySelector('span').textContent = msg;
    toast.classList.add('show');

    setTimeout(() => {
        toast.classList.remove('show');
    }, 3500);
}

function checkOfflineStatus() {
    const offlineBanner = document.getElementById('offlineBanner');
    if (!offlineBanner) return;

    function updateOnlineStatus() {
        if (navigator.onLine) {
            offlineBanner.style.display = 'none';
        } else {
            offlineBanner.style.display = 'block';
        }
    }

    window.addEventListener('online', updateOnlineStatus);
    window.addEventListener('offline', updateOnlineStatus);
    updateOnlineStatus();
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}
