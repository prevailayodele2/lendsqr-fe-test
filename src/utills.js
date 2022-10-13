import {BiUser, BiUserCheck} from 'react-icons/bi'
import {FiUsers} from 'react-icons/fi'
import {GiTakeMyMoney, GiReceiveMoney, GiBank, GiHandBag} from 'react-icons/gi'
import {FaHandshake, FaFan, FaCoins} from 'react-icons/fa'
import {MdSavings} from 'react-icons/md'
import { AiOutlineUserAdd, AiOutlineAudit, AiOutlineBarChart } from 'react-icons/ai';
import { FcSmartphoneTablet } from 'react-icons/fc';
import { GoSettings } from 'react-icons/go';
import { RiPriceTag3Fill } from 'react-icons/ri';
import { RiFilePaper2Line, RiUserSettingsLine } from 'react-icons/ri';

export const SidebarItem = {
    Customer: [
        {id: 1, link: '/user', svg: <BiUser/>, name: 'Users'},
        {id: 2, link: '/user/45', svg: <FiUsers />, name: 'Guarantors'},
        {id: 3, link: '/loans', svg: <GiTakeMyMoney /> ,name: 'Loans'},
        {id: 4, link: '/decisionmodels', svg: <FaHandshake />, name: 'Decision Models'},
        {id: 5, link: '/savings', svg: <MdSavings />, name: 'Savings'},
        {id: 6, link: '/loanRequest', svg: <GiReceiveMoney />, name: 'Loan Request'},
        {id: 7, link: '/whitelist', svg: <BiUserCheck />, name: 'Whitelist'},
        {id: 8, link: '/user/90/personal_info', svg: <AiOutlineUserAdd />, name: 'Karma'},
    ],
    Business:[
        {id: 1, link: '/organisation', svg: <GiHandBag />, name: 'Orgainsation'},
        {id: 2, link: '/loanProducts', svg: <GiReceiveMoney />, name: 'Loan Products'},
        {id: 3, link: '/savingProducts', svg: <GiBank />, name: 'Saving Products'},
        {id: 4, link: '/fees', svg: <FaCoins />, name: 'Fees and Charges'},
        {id: 5, link: '/transaction', svg: <FcSmartphoneTablet />, name: 'Transaction'},
        {id: 6, link: '/services', svg: <FaFan />, name: 'Services'},
        {id: 7, link: '/serviceAccount', svg: <RiUserSettingsLine />, name: 'Service Account'},
        {id: 8, link: '/settlements', svg: <RiFilePaper2Line />, name: 'Settlements'},
        {id: 9, link: '/reports', svg: <AiOutlineBarChart />, name: 'Reports'},
    ],
    Settings:[
        {id: 1, link: '/preferances', svg: <GoSettings />, name: 'Preferences'},
        {id: 2, link: '/fees&pricing', svg: <RiPriceTag3Fill />, name: 'Fees and Pricing'},
        {id: 3, link: '/auditLogs', svg: <AiOutlineAudit />, name: 'Audit Logs'},
    ]
}

export const monthFormat = [
    {id: '01', name: 'Jan'},
    {id: '02', name: 'Feb'},
    {id: '03', name: 'Mar'},
    {id: '04', name: 'Apr'},
    {id: '05', name: 'May'},
    {id: '06', name: 'Jun'},
    {id: '07', name: 'Jul'},
    {id: '08', name: 'Aug'},
    {id: '09', name: 'Sep'},
    {id: '10', name: 'Oct'},
    {id: '11', name: 'Nov'},
    {id: '12', name: 'Dec'},
]