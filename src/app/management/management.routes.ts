import { Routes } from '@angular/router';
import { DepositComponent } from './deposit/deposit.component';
import { TransactionsComponent } from './transactions/transactions.component';

export const ManagementRoutes: Routes = [
    {
        path: "deposit",
        component: DepositComponent,
        title: "Deposit"
    },
    {
        path: "transactions",
        component: TransactionsComponent,
        title: "Transactions"
    }
];
