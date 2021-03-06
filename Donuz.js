import { categories } from './Donuz/Models/Categoria';
import { computableCode } from './Donuz/Models/CodigoPontuavel';
import { clients } from './Donuz/Models/Cliente';
import { share } from './Donuz/Models/Compartilhar';
import { settings } from './Donuz/Models/Configuracao';
import { mails } from './Donuz/Models/Emails';
import { estabelishment } from './Donuz/Models/Estabelecimento';
import { branch } from './Donuz/Models/Filial';
import { points } from './Donuz/Models/Ponto';
import { prizes } from './Donuz/Models/Premio';
import { rescues } from './Donuz/Models/Resgate';
import { balance } from './Donuz/Models/Saldo';
import { voucher } from './Donuz/Models/Voucher';
import { gifts } from './Donuz/Models/Presentes';
export var Donuz = {
    category: categories,
    customer: clients,
    scoringCode: computableCode,
    share: share,
    settings: settings,
    mail: mails,
    store: estabelishment,
    branch: branch,
    point: points,
    reward: prizes,
    redeemption: rescues,
    balance: balance,
    voucher:voucher,
    gifts: gifts,
    estabelishment: estabelishment, 
    prizes: prizes
}
    
    