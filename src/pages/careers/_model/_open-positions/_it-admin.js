import { job_types } from '../_job_types/_job_types'
import { cyberjaya, malta } from '../_locations/_locations'
import { localize } from 'components/localization'

export const it_admin_positions = [
    {
        title: localize('System Administrator'),
        id: '9570f25a-5066-41f5-bb1c-f272ae49d134',
        keywords: [localize('System Administrator')],
        location: cyberjaya.name,
        type: [job_types.full_time],
        team: 'it-admin',
        description: [
            localize(
                'You will make sure that our IT infrastructure is working smoothly and securely. You will enjoy the challenges that this job offers as opportunities to use your talent and enhance your experience. With your technical expertise, you will build and operate a reliable and low-latency digital foundation that will help us deliver the excellent service our customers deserve. ',
            ),
        ],
        responsibilities: [
            localize(
                'Configure, monitor, and maintain our IT infrastructure to make sure it is running smoothly.',
            ),
            localize('Install new software and upgrade computer systems across the company.'),
            localize('Test our IT systems regularly to prevent downtime and other threats.'),
            localize('Perform company-wide software and hardware troubleshooting.'),
            localize('Make sure that the data is backed up regularly and efficiently.'),
            localize(
                'Implement firewalls and educate employees on how to increase their digital security.',
            ),
            localize('Choose secure, scalable systems from what vendors offer.'),
            localize('Talk to users and vendors to find the best solution for a system problem.'),
            localize('Predict future capacity requirements by analysing user needs.'),
            localize(
                'Be the point-of-contact for the employees with problems related to the network or the system',
            ),
        ],
        qualifications: [
            localize(
                'A diploma or degree in computer science or information technology or relevant experience in the field of IT operations/administration',
            ),
            localize(
                'Experience in troubleshooting computer software, hardware, and internet applications and networks',
            ),
            localize(
                'Experience in firewall appliances such as Fortigate or similar devices (e.g. Cisco, Pfsense)',
            ),
            localize('Knowledge of Mac or Linux technologies and associated security features'),
            localize(
                'Firm grasp of VPN concepts and experience in setting up site-to-site networks \n',
            ),
        ],
        preferences: [
            localize(
                'Experience in one or more of the following: DRAC; ARUBA or similar enterprise WiFi AP management; and end-user device security audit and policy implementation',
            ),
        ],
    },
    {
        title: localize('System Administrator'),
        id: 'b26c26ea-f19f-49fc-94b1-dc92586f0222',
        keywords: [localize('System Administrator')],
        location: malta.name,
        type: [job_types.full_time],
        team: 'it-admin',
        description: [
            localize(
                'You will make sure that our IT infrastructure is working smoothly and securely. You will enjoy the challenges that this job offers as opportunities to use your talent and enhance your experience. With your technical expertise, you will build and operate a reliable and low-latency digital foundation that will help us deliver the excellent service our customers deserve. \n',
            ),
        ],
        responsibilities: [
            localize(
                'Configure, monitor, and maintain our IT infrastructure to make sure it is running smoothly.',
            ),
            localize('Install new software and upgrade computer systems across the company.'),
            localize('Test our IT systems regularly to prevent downtime and other threats.'),
            localize('Perform company-wide software and hardware troubleshooting.'),
            localize('Make sure that the data is backed up regularly and efficiently.'),
            localize(
                'Implement firewalls and educate employees on how to increase their digital security.',
            ),
            localize('Choose secure, scalable systems from what vendors offer.'),
            localize('Talk to users and vendors to find the best solution for a system problem.'),
            localize('Predict future capacity requirements by analysing user needs.'),
            localize(
                'Be the point-of-contact for the employees with problems related to the network or the system.\n',
            ),
        ],
        qualifications: [
            localize(
                'A diploma or degree in computer science or information technology or relevant experience in the field of IT operations/administration',
            ),
            localize(
                'Experience in troubleshooting computer software, hardware, and internet applications and networks',
            ),
            localize(
                'Experience in firewall appliances such as Fortigate or similar devices (e.g. Cisco, Pfsense)',
            ),
            localize('Knowledge of Mac or Linux technologies and associated security features'),
            localize(
                'Firm grasp of VPN concepts and experience in setting up site-to-site networks  \n',
            ),
        ],
        preferences: [
            localize(
                'Experience in one or more of the following: DRAC; ARUBA or similar enterprise WiFi AP management; and end-user device security audit and policy implementation',
            ),
        ],
    },
]
