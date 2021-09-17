import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Graph } from '../components/graph/Graph';
import { Home } from '../components/home/Home';
import { Interprete } from '../components/interprete/Interprete';
import { ErrorReport } from '../components/report/ErrorReport';
import { Report } from '../components/report/Report';
import { TableReport } from '../components/report/TableReport';
import { Navbar } from '../components/ui/Navbar';
export const DashboardRoutes = () => {
    return (
        <>
            <Navbar />
            <div className="p-3">
                <Switch>
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/parse" component={Interprete} />
                    <Route exact path="/report" component={Report} />
                    <Route exact path="/graph" component={Graph} />
                    <Route exact path="/symbol" component={TableReport} />
                    <Route exact path="/error" component={ErrorReport} />
                    <Redirect to="/home" />
                </Switch>
            </div>
        </>
    );
};
