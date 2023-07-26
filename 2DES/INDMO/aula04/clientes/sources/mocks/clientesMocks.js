import cliente1 from '../../assets/avatares/peralta.jpg';
import cliente2 from '../../assets/avatares/terry-crews.jpg'
import cliente3 from '../../assets/avatares/will-smith.jpg'

const clientes = [
    {
        cpf: '111.222.333-44',
        nome: 'Detetive',
        sobrenome: 'Peralta',
        telefone: '199524-7520',
        email: 'peralta.fbi123@gmail.com',
        avatar: cliente1,
        cep: '13910-123',
        numero: 88,
        complemento: "Condomínio" 
    },
    {
        cpf: '999.888.777-66',
        nome: 'Terry',
        sobrenome: 'Crews',
        telefone: '1955324-8621',
        email: 'terrycrews10@hotmail.com',
        avatar: cliente2,
        cep: '13920-321',
        numero: 10,
        complemento: null
    },
    {
        cpf: '555.444.222-10',
        nome: 'Will',
        sobrenome: 'Smith',
        telefone: '1925475-9632',
        email: 'smithwill@yahoo.com',
        avatar: cliente3,
        cep: '13910-987',
        numero: 54,
        complemento: "Bloco 2"
    }
];

export default clientes;