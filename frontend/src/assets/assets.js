import appointment_img from './appointment_img.png'
import header_img from './header_img.png'
import group_profiles from './group_profiles.png'
import profile_pic from './profile_pic.png'
import contact_image from './contact_image.png'
import about_image from './about_image.png'
import logo from './logo.svg'
import dropdown_icon from './dropdown_icon.svg'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
import chats_icon from './chats_icon.svg'
import verified_icon from './verified_icon.svg'
import arrow_icon from './arrow_icon.svg'
import info_icon from './info_icon.svg'
import upload_icon from './upload_icon.png'
import stripe_logo from './stripe_logo.png'
import razorpay_logo from './razorpay_logo.png'
import doc1 from './doc1.png'
import doc2 from './doc2.png'
import doc3 from './doc3.png'
import doc4 from './doc4.png'
import doc5 from './doc5.png'
import doc6 from './doc6.png'
import doc7 from './doc7.png'
import doc8 from './doc8.png'
import doc9 from './doc9.png'
import doc10 from './doc10.png'
import doc11 from './doc11.png'
import doc12 from './doc12.png'
import doc13 from './doc13.png'
import doc14 from './doc14.png'
import doc15 from './doc15.png'
import Dermatologist from './Dermatologist.svg'
import Gastroenterologist from './Gastroenterologist.svg'
import General_physician from './General_physician.svg'
import Gynecologist from './Gynecologist.svg'
import Neurologist from './Neurologist.svg'
import Pediatricians from './Pediatricians.svg'


export const assets = {
    appointment_img,
    header_img,
    group_profiles,
    logo,
    chats_icon,
    verified_icon,
    info_icon,
    profile_pic,
    arrow_icon,
    contact_image,
    about_image,
    menu_icon,
    cross_icon,
    dropdown_icon,
    upload_icon,
    stripe_logo,
    razorpay_logo
}

export const specialityData = [
    {
        speciality: 'General physician',
        image: General_physician
    },
    {
        speciality: 'Gynecologist',
        image: Gynecologist
    },
    {
        speciality: 'Dermatologist',
        image: Dermatologist
    },
    {
        speciality: 'Pediatricians',
        image: Pediatricians
    },
    {
        speciality: 'Neurologist',
        image: Neurologist
    },
    {
        speciality: 'Gastroenterologist',
        image: Gastroenterologist
    },
]

export const doctors = [
    {
        _id: 'doc1',
        name: 'Dr. GOKUL',
        image: doc1,
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Gokul has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Gokul has a strong commitment to patient care and treats each patient with individual care and concern .',
        fees: 500,
        address: {
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, India'
        }
    },
    {
        _id: 'doc2',
        name: 'Dr. NANDHA',
        image: doc2,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Dr. Nandha has a strong commitment to handle High-risk pregnancy management.she has 5 years experience in laparoscopy.She is an expertise in gynecolog, providing surgeryInfertility treatments,Menstrual disorders and PCOS care.',
        fees: 100,
        address: {
            line1: '27th Cross, Richmond',
            line2: 'Circle, Ring Road, India'
        }
    },
    {
        _id: 'doc3',
        name: 'Dr. ZRI',
        image: doc3,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '1 Years',
        about: 'Dr. ZRI  specializes in comprehensive skin care, including skin cancer screening and treatment. He is skilled in managing acne and scars, offering cosmetic dermatology services such as Botox, fillers, and laser treatments. Dr. ZRI is also experienced in treating chronic skin conditions like eczema and psoriasis, providing personalized care to each patient.',
        fees: 300,
        address: {
            line1: '37th Cross, Richmond',
            line2: 'Circle, Ring Road, India'
        }
    },
    {
        _id: 'doc4',
        name: 'Dr. BALU',
        image: doc4,
        speciality: 'Pediatricians',
        degree: 'MBBS',
        experience: '2 Years',
        about: 'Dr. Balu  is a dedicated pediatrician specializing in neonatal intensive care and the management of pediatric infectious diseases. He is skilled in preventive care, including vaccinations, and has expertise in monitoring child growth and development to ensure optimal health. Dr. Balu provides compassionate, comprehensive care to children and adolescents at every stage of development.',
        fees: 400,
        address: {
            line1: '47th Cross, Richmond',
            line2: 'Circle, Ring Road, India'
        }
    },
    {
        _id: 'doc5',
        name: 'Dr. AMMU',
        image: doc5,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Ammu is an expert neurologist with a focus on stroke management, epilepsy treatment, and the care of neurodegenerative diseases. She is skilled in interpreting neuroimaging and uses advanced diagnostic techniques to deliver precise treatment. Dr. Ammu is dedicated to providing personalized care for patients with complex neurological conditions, helping them improve their quality of life.',
        fees: 500,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, India'
        }
    },
    {
        _id: 'doc6',
        name: 'Dr. VINOD',
        image: doc6,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Vinod is an expert neurologist with a focus on stroke management, epilepsy treatment, and the care of neurodegenerative diseases. He is skilled in interpreting neuroimaging and uses advanced diagnostic techniques to deliver precise treatment. Dr. Vinod is dedicated to providing personalized care for patients with complex neurological conditions, helping them improve their quality of life.',
        fees: 200,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, India'
        }
    },
    {
        _id: 'doc7',
        name: 'Dr. YADHU',
        image: doc7,
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. YADHU  is a highly skilled general physician with expertise in managing chronic diseases, providing preventive healthcare, and conducting comprehensive diagnostic assessments. He is experienced in geriatric care and focuses on promoting long-term wellness through personalized treatment plans. He is committed to offering compassionate care for a wide range of adult health conditions.',
      fees: 500,
        address: {
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, India'
        }
    },
    {
        _id: 'doc8',
        name: 'Dr. RAMZAN',
        image: doc8,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Dr. Ramzan is an experienced gynecologist specializing in women’s health, with expertise in managing high-risk pregnancies and performing laparoscopic gynecological surgeries. He is skilled in treating infertility, offering personalized fertility solutions, and addressing menstrual disorders, including PCOS. Dr. Ramzan is dedicated to providing comprehensive, compassionate care tailored to each patient’s unique needs.',
        fees: 600,
        address: {
            line1: '27th Cross, Richmond',
            line2: 'Circle, Ring Road, India'
        }
    },
    {
        _id: 'doc9',
        name: 'Dr.LAKSHMI',
        image: doc9,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '1 Years',
        about: 'Dr. Lakshmi Rao, is a skilled dermatologist specializing in the diagnosis and treatment of various skin conditions, including skin cancer, acne, and eczema. She is proficient in cosmetic dermatology procedures, such as laser treatments, Botox, and dermal fillers, enhancing her patients appearance and confidence. Dr. Lakshmi is dedicated to providing personalized care and education to help patients achieve and maintain healthy skin.',
        fees: 300,
        address: {
            line1: '37th Cross, Richmond',
            line2: 'Circle, Ring Road, India'
        }
    },
    {
        _id: 'doc10',
        name: 'Dr. BHAVIN',
        image: doc10,
        speciality: 'Pediatricians',
        degree: 'MBBS',
        experience: '2 Years',
        about: 'Dr. Bhavin Patel,  is a dedicated pediatrician with expertise in the comprehensive care of infants, children, and adolescents. He specializes in managing acute and chronic illnesses, vaccinations, and developmental assessments. Dr. Bhavin is committed to promoting preventive healthcare and ensuring the well-being of his young patients through compassionate and family-centered care.',
        fees: 400,
        address: {
            line1: '47th Cross, Richmond',
            line2: 'Circle, Ring Road, India'
        }
    },
    {
        _id: 'doc11',
        name: 'Dr. Aarathy',
        image: doc11,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Aarathy ,is a knowledgeable neurologist specializing in the diagnosis and treatment of neurological disorders such as epilepsy, multiple sclerosis, and migraine. He is experienced in performing advanced neuroimaging and conducting thorough neurological assessments to provide accurate diagnoses. Dr. Aarathy is dedicated to developing individualized treatment plans that enhance the quality of life for his patients with complex neurological conditions.',
        fees: 500,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road,India'
        }
    },
    {
        _id: 'doc12',
        name: 'Dr. SUBRAMANIAN',
        image: doc12,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Subramanian Reddy,  is a proficient neurologist specializing in the treatment of various neurological disorders, including stroke, epilepsy, and neurodegenerative diseases. He is skilled in performing advanced diagnostic procedures, including EEGs and neuroimaging, to accurately assess and manage complex conditions. Dr. Subramanian is committed to providing compassionate care, focusing on improving his patients quality of life through personalized treatment plans and ongoing support.',
        fees: 500,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, India'
        }
    },
    {
        _id: 'doc13',
        name: 'Dr. NAVALI',
        image: doc13,
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. NavalI,  is a highly regarded general physician with extensive experience in managing chronic diseases and providing preventive healthcare. He is skilled in diagnosing and treating a wide range of adult health issues, emphasizing patient education and wellness. Dr. Subramanian is dedicated to delivering compassionate, comprehensive care tailored to meet the unique needs of each patient.',
        fees: 500,
        address: {
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, India'
        }
    },
    {
        _id: 'doc14',
        name: 'Dr. Ryan',
        image: doc14,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Dr. Ryan Matthews, MD (Gynecology)is a compassionate gynecologist specializing in women’s reproductive health and wellness. He has expertise in managing high-risk pregnancies, performing laparoscopic surgeries, and treating a variety of gynecological conditions, including menstrual disorders and infertility. Dr. Ryan is committed to providing personalized care, empowering his patients with knowledge and support throughout their healthcare journey.',
        fees: 600,
        address: {
            line1: '27th Cross, Richmond',
            line2: 'Circle, Ring Road, India'
        }
    },
    {
        _id: 'doc15',
        name: 'Dr. DISHA',
        image: doc15,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '1 Years',
        about: 'Dr.Disha is a skilled dermatologist specializing in the diagnosis and treatment of various skin conditions, including acne, psoriasis, and eczema. She is experienced in cosmetic dermatology procedures such as laser therapy, chemical peels, and anti-aging treatments. Dr. Disha is dedicated to providing personalized care, focusing on patient education to help them maintain healthy skin and achieve their cosmetic goals.',
        fees: 300,
        address: {
            line1: '37th Cross, Richmond',
            line2: 'Circle, Ring Road, India'
        }
    }
]