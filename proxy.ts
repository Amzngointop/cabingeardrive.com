import { NextRequest, NextResponse } from 'next/server'

const amazonLinks = [
'https://www.amazon.com/HOTOR-Trunk-Organizer-Car-Large-Capacity/dp/B0CM6KVCSX?th=1&linkCode=ll2&tag=cabingeardriv-20&linkId=43cf834ccd912f59d1024d154dac8f49&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Femuar-Organizer-Capacity-Waterproof-Collapsible/dp/B0D2H69Q7S?&linkCode=ll2&tag=cabingeardriv-20&linkId=d4b740da45988a9588bbb454678c461d&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Deosk-Organizer-Organizers-Accessories-Waterproof/dp/B0BZ6ZN854?th=1&linkCode=ll2&tag=cabingeardriv-20&linkId=e10840ad73db6e2a7f4569b29d61dedc&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/FORTEM-Organizer-Collapsible-Compartment-Accessories/dp/B0DQ6CM6YN?th=1&linkCode=ll2&tag=cabingeardriv-20&linkId=64195c3521d98de9eeded9ecef8d1ba8&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/TRUNKCRATEPRO-Organizers-Adjustable-Compartments-Accessories/dp/B01ECMRFTA?th=1&linkCode=ll2&tag=cabingeardriv-20&linkId=bf54ed08b29f69acbbb33d579d8eb94f&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/KNODEL-Organizer-Automotive-Organizers-Reinforced/dp/B0CR31THFH?th=1&linkCode=ll2&tag=cabingeardriv-20&linkId=02bea805427c5ede1144b9ae7f1c0acf&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Mount%E3%80%9020-Magnets%E3%80%91Magnetic-Dashboard%E3%80%90360%C2%B0-Rotation%E3%80%91Hands-Accessories/dp/B0C1Y8Z6VT?th=1&linkCode=ll2&tag=cabingeardriv-20&linkId=469752ef2695188bd19b6a9133aab3a1&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Qifutan-Windshield-Dashboard-Automobile-Smartphone/dp/B0DSFJY5VD?th=1&linkCode=ll2&tag=cabingeardriv-20&linkId=b5b1a0ef7465e61a549d9bc0b4929b54&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Miracase-Holders-Universal-Automobile-Smartphones/dp/B0CHYBKQPM?th=1&linkCode=ll2&tag=cabingeardriv-20&linkId=652ae7f949010d56ff61bcdd1af4427b&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Qifutan-Windshield-Dashboard-Automobile-Smartphone/dp/B0CHS69JW3?th=1&linkCode=ll2&tag=cabingeardriv-20&linkId=3e7266103d1cbaa97978dce4f4a7874e&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Magsafe-Strongest-Suction-Magnetic-Adjustable/dp/B0DN1S1YLV?th=1&linkCode=ll2&tag=cabingeardriv-20&linkId=91ed0a04408a44a71bfb636ea87a7d7b&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Universal-Adjustable-360%C2%B0Rotation-Compatible-Smartphones/dp/B0D795K88R?th=1&linkCode=ll2&tag=cabingeardriv-20&linkId=6c14c8b250b29d663bf593dbb6681fef&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Ouzorp-Steering-Microfiber-Anti-Slip-Universal/dp/B0DHRNXCX4?th=1&linkCode=ll2&tag=cabingeardriv-20&linkId=d3424aece147fd8f573de17867659cc4&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Valleycomfy-Microfiber-Leather-Steering-Universal/dp/B071CPV74B?th=1&linkCode=ll2&tag=cabingeardriv-20&linkId=833ea529e285365c40711986f38796a8&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Uxcer-Steering-2016-2025-Breathable-Protector/dp/B0DDJJZGQM?th=1&linkCode=ll2&tag=cabingeardriv-20&linkId=a37d6707ab2b131f1bfc69ed1ef91f51&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/CAR-PASS-Rhinestones-Universal-Protector/dp/B0CC4P58X6?th=1&linkCode=ll2&tag=cabingeardriv-20&linkId=19cb2502e98577f492290642f89456be&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Steering-Protector-Breathable-Microfiber-Universal/dp/B093D27Q6C?th=1&linkCode=ll2&tag=cabingeardriv-20&linkId=4f9035b9b11f8fc8f2c4749638f4c064&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/HOTOR-Car-Steering-Wheel-Cover/dp/B0BK3N6ZP4?th=1&linkCode=ll2&tag=cabingeardriv-20&linkId=2c1dba175f1169aee74b0878a7c0a07e&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Drop-Stop-Original-Patented-Filler/dp/B00BYH6C1E?&linkCode=ll2&tag=cabingeardriv-20&linkId=b79d703e9aebf0ae4b73ad84af6ff54a&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/YGDMD-Car-Seat-Gap-Filler/dp/B0F486H1YZ?th=1&linkCode=ll2&tag=cabingeardriv-20&linkId=43943034ec07d33c479f7cbc39be5468&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Hiseanllo-Universal-Leather-Between-Dropping/dp/B0CJRVK5Q1?&linkCode=ll2&tag=cabingeardriv-20&linkId=ac2a20b5e176b2f25e1862f33455ca13&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Helteko-Backseat-Car-Organizer-Accessories/dp/B07RNZV64Y?&linkCode=ll2&tag=cabingeardriv-20&linkId=c9d3835d2fa393cca6f86dd612da95d6&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Sukuos-Backseat-Organizer-Protectors-Accessories/dp/B07ZNRTQDN?&linkCode=ll2&tag=cabingeardriv-20&linkId=b0717694dcd15d3a81adfbde06303fa0&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Oneyus-Backseat-Organizer-Storage-Essentials/dp/B0D2KY9YC2?th=1&linkCode=ll2&tag=cabingeardriv-20&linkId=0c7b84a4141316cdc2cc74e51695c95b&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/EcoNour-Reflective-Protection-Sedans-64x32in/dp/B01KIFISX2?th=1&linkCode=ll2&tag=cabingeardriv-20&linkId=e3c51006870f7edb8c6709d10130b9be&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Thickened-Automotive-Sunshade-Universal-Windshield/dp/B0C1YFF2JJ?th=1&linkCode=ll2&tag=cabingeardriv-20&linkId=ea4e279a76b3163e555655819ba99bd3&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Autovir-Windshield-Foldable-Automotive-Sunshades/dp/B0CR6B5BVK?th=1&linkCode=ll2&tag=cabingeardriv-20&linkId=b0acfc27d4f002c5f6bc31b8ff5742ee&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/JASVIC-Car-Windshield-Shade-Umbrella/dp/B08BLRGWGY?th=1&linkCode=ll2&tag=cabingeardriv-20&linkId=e64175bf55766b4f226bc52bbab3c638&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/EzyShade-Windshield-Size-Chart-Hassle-Free-Reflector/dp/B018ERRLU2?th=1&linkCode=ll2&tag=cabingeardriv-20&linkId=c048f89d1b07eb143447ebf0a861316d&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/HOTOR-Car-Trash-Storage-Pockets/dp/B07VGRVKSN?th=1&linkCode=ll2&tag=cabingeardriv-20&linkId=385c11c12d838196e218c2ddb23a7dad&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/HOTOR-Car-Trash-Can-Lid/dp/B0C4GX2NYW?th=1&linkCode=ll2&tag=cabingeardriv-20&linkId=6b3fa18718c1173324a550d6ee387482&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Vankor-Hanging-Waterproof-Automotive-Garbage/dp/B09X36F1ZK?&linkCode=ll2&tag=cabingeardriv-20&linkId=28af324f13c1ab12af9d5b030860f5a3&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Ginsco-Accessories-Interior-Leakproof-Additional/dp/B0C49SCMFJ?th=1&linkCode=ll2&tag=cabingeardriv-20&linkId=36186b76d91fe77fa7617417cec9afa6&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Waterproof-Garbage-Leak-Proof-Storage-Hanging/dp/B087L49KNB?th=1&linkCode=ll2&tag=cabingeardriv-20&linkId=f50564ba09dddb95a947aa1cc5ba3ccc&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Cute-Car-Trash-Can-Lid/dp/B09CMFGTPG?th=1&linkCode=ll2&tag=cabingeardriv-20&linkId=82d67671a0b9092d3577a027e459832b&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Protector-Waterproof-Protectors-Non-Slip-Backing/dp/B096NYZCPS?th=1&linkCode=ll2&tag=cabingeardriv-20&linkId=61c1a038ceacc07c16c6224b2aec1282&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Smart-elf-Protector-Thickest-Non-Slip/dp/B07TKB5SWG?th=1&linkCode=ll2&tag=cabingeardriv-20&linkId=0c40f7ec0776266360804c1941aa0ef1&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/LoyaGour-Protector-Waterproof-Automotive-Protectors/dp/B0BFGSSKLD?th=1&linkCode=ll2&tag=cabingeardriv-20&linkId=dd971fce4f65b188a6cfbef783bf1078&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Coverado-Protector-Waterproof-Leather-Cushion/dp/B0FHJXYSDX?th=1&linkCode=ll2&tag=cabingeardriv-20&linkId=fd8d9190fae951b2917cf416eb5dc18c&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/MORROLS-Protector-Non-Slip-Leather-Universal-Size-Waterproof/dp/B085VTH1MB?th=1&linkCode=ll2&tag=cabingeardriv-20&linkId=1d681d18ebdc8c95099aec0daad197f5&language=en_US&ref_=as_li_ss_tl',
'https://www.amazon.com/Caterpillar-MeshFlex-Automotive-Covers-Trucks/dp/B09FYNSQJL?th=1&linkCode=ll2&tag=cabingeardriv-20&linkId=39698cc258333400f4ea0da53c7a5489&language=en_US&ref_=as_li_ss_tl',
]

const amazonLinks2 = [
  'https://www.amazon.com/Window-Shades-Car-Windshield-Reflective/dp/B0GS8KL2PJ?th=1&linkCode=ll2&tag=cabingeardriv2-20&linkId=70cd27fba511a25e78b93c1c3de2ad11&language=en_US&gaOptInStatus=true&ref_=as_li_ss_tl',
'https://www.amazon.com/BNYD-Windshield-Sunshade-Foldable-Reflective/dp/B01JAP2M2O?&linkCode=ll2&tag=cabingeardriv2-20&linkId=a93361199274bb7d058dc44598c7a37b&language=en_US&gaOptInStatus=true&ref_=as_li_ss_tl',
'https://www.amazon.com/EcoNour-Windshield-Sunshade-Universal-Material-Reflector/dp/B079J89SJ3?th=1&linkCode=ll2&tag=cabingeardriv2-20&linkId=a25efa810dcd8b3b00d1d489f419fc81&language=en_US&gaOptInStatus=true&ref_=as_li_ss_tl',
'https://www.amazon.com/SINGARO-Windshield-Reflective-Overlapping-Accessories/dp/B0DQWJGP9M?th=1&linkCode=ll2&tag=cabingeardriv2-20&linkId=5e58b5b7d3a0f2b9fa83c5408455b9c0&language=en_US&gaOptInStatus=true&ref_=as_li_ss_tl',
'https://www.amazon.com/Magnelex-Windshield-Sunshade-Reflective-Polyester/dp/B074DLQ2YM?th=1&linkCode=ll2&tag=cabingeardriv2-20&linkId=41d6accbe87e3a5fc270a41c703b0bb6&language=en_US&gaOptInStatus=true&ref_=as_li_ss_tl',
'https://www.amazon.com/Protector-Cushion-Thickest-Waterproof-Non-Slip/dp/B096PGXGB4?th=1&linkCode=ll2&tag=cabingeardriv2-20&linkId=ba4c5776af84066c40f84fd8c6edf2ea&language=en_US&gaOptInStatus=true&ref_=as_li_ss_tl',
'https://www.amazon.com/Morrols-Protector-Non-Slip-Leather-Universal-Size-Waterproof/dp/B07R454CJG?th=1&linkCode=ll2&tag=cabingeardriv2-20&linkId=93db7120921a64d217b9c87270a8d9b6&language=en_US&gaOptInStatus=true&ref_=as_li_ss_tl',
'https://www.amazon.com/Protector-Siivton-Protectors-Non-Slip-Vehicles/dp/B09W2G8VMX?th=1&linkCode=ll2&tag=cabingeardriv2-20&linkId=f750121fbce867cd2111798f148bddae&language=en_US&gaOptInStatus=true&ref_=as_li_ss_tl',
'https://www.amazon.com/FORTEM-Organizer-Collapsible-Securing-Included/dp/B01DIMTWCS?th=1&linkCode=ll2&tag=cabingeardriv2-20&linkId=349b7a14cd7ce67e4731564259d9e0fa&language=en_US&gaOptInStatus=true&ref_=as_li_ss_tl',
'https://www.amazon.com/Gomass-Steering-Anti-Slip-Breathable-Surround/dp/B09R7GSQYP?th=1&linkCode=ll2&tag=cabingeardriv2-20&linkId=7debe1e67f58ec87532abfb650ebc85b&language=en_US&gaOptInStatus=true&ref_=as_li_ss_tl',
'https://www.amazon.com/SEG-Direct-Microfiber-Steering-Universal/dp/B01GLMEK60?th=1&linkCode=ll2&tag=cabingeardriv2-20&linkId=dcedb01d5c8d6b5b3878aa921a03de23&language=en_US&gaOptInStatus=true&ref_=as_li_ss_tl',
'https://www.amazon.com/OUDEW-Dustbin-Diamond-Leakproof-Automotive/dp/B08762P3NN?th=1&linkCode=ll2&tag=cabingeardriv2-20&linkId=1e672bbb52cdce1356e419e9124ec18e&language=en_US&gaOptInStatus=true&ref_=as_li_ss_tl',
]



export function proxy(request: NextRequest) {
  const url = request.nextUrl.clone()
  const cookieName = 'drive'
  const cookieName2 = 'drivefast'

    if (url.pathname === '/') {
    const redirectFlag = request.cookies.get(cookieName);
    if (redirectFlag?.value) {
      const randomUrl = amazonLinks[Math.floor(Math.random() * amazonLinks.length)];
      const targetUrl = randomUrl 
   

      const html = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="refresh" content="0; url=${targetUrl}">

    <script>
        window.location.replace("${targetUrl}");
    </script>
    <style>
        body { font-family: sans-serif; text-align: center; padding: 50px; }
    </style>
</head>
<body>
</body>
</html>`;

      const response = new NextResponse(html, {
        status: 200,
        headers: {
          'Content-Type': 'text/html; charset=utf-8',
          'Referrer-Policy': 'no-referrer-when-downgrade',
          'Cache-Control': 'no-store, no-cache, must-revalidate',
        },
      });

      response.cookies.set(cookieName, '', {
        path: '/',
        maxAge: 0,
      });

      return response;
    }
    const redirectFlag2 = request.cookies.get(cookieName2);
    if (redirectFlag2?.value) {
      const randomUrl = amazonLinks2[Math.floor(Math.random() * amazonLinks2.length)];
      const targetUrl = randomUrl 
   

      const html = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="refresh" content="0; url=${targetUrl}">

    <script>
        window.location.replace("${targetUrl}");
    </script>
    <style>
        body { font-family: sans-serif; text-align: center; padding: 50px; }
    </style>
</head>
<body>
</body>
</html>`;

      const response = new NextResponse(html, {
        status: 200,
        headers: {
          'Content-Type': 'text/html; charset=utf-8',
          'Referrer-Policy': 'no-referrer-when-downgrade',
          'Cache-Control': 'no-store, no-cache, must-revalidate',
        },
      });

      response.cookies.set(cookieName2, '', {
        path: '/',
        maxAge: 0,
      });

      return response;
    }
  }

  return NextResponse.next()
}


export const config = {
  matcher: ['/'],
}

