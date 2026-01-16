import { Routes } from '@angular/router';
import { Agendamento } from './components/agendamento/agendamento';
import { AgendamentoExemplo } from './components/agendamento-exemplo/agendamento-exemplo';

export const routes: Routes = [
    {
        path: "",
        component: Agendamento
    },
    {
        path: "agendamento",
        component: AgendamentoExemplo
    }
];
