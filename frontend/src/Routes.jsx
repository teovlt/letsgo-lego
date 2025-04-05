import React from 'react'
import { BrowserRouter as Router, Routes as Switch, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Profil from './pages/Profil'
import Favourites from './pages/Favourites'
import Sell from './pages/Sell'
import Sale from './pages/Sale'
import Cgu from './pages/Cgu'
import Cgv from './pages/Cgv'
import Contact from './pages/Contact'
import Cookies from './pages/Cookies'
import About from './pages/About'
import Guides from './pages/Guides'
import DataProtection from './pages/DataProtection'
import Livraison from './pages/Livraison'
import LegalMentions from './pages/LegalMentions'
import Help from './pages/Help'
import Payement from './pages/Payement'

import ConsoInfo from './pages/ConsoInfos'
import NotFound from './pages/NotFound'
import Explorer from './pages/Explorer'

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path='/' element={<Home />} />
                <Route path='/dashboard'>
                    <Route path='' element={<Navigate to='/dashboard/profil' replace />} />
                    <Route path=':tabId' element={<Profil />} />
                </Route>
                <Route path='/favoris'>
                    <Route path='' element={<Navigate to='/favoris/ventes' replace />} />
                    <Route path=':tabId' element={<Favourites />} />
                </Route>
                <Route path='/vendre' element={<Sell />} />
                <Route path='/ventes'>
                    <Route path=':auctionId' element={<Sale />} />
                </Route>
                <Route path='/explorer'>
                    <Route path='' element={<Navigate to='/explorer/ensembles' replace />} />
                    <Route path=':filter' element={<Explorer />} />
                </Route>
                <Route path='/contact' element={<Contact />} />
                <Route path='/cgu' element={<Cgu />} />
                <Route path='/cgv' element={<Cgv />} />
                <Route path='/cookies' element={<Cookies />} />
                <Route path='/about' element={<About />} />
                <Route path='/guides' element={<Guides />} />
                <Route path='/protection-des-donnees' element={<DataProtection />} />
                <Route path='/livraison' element={<Livraison />} />
                <Route path='/paiement' element={<Payement />} />
                <Route path='/mentions-legales' element={<LegalMentions />} />
                <Route path='/aide-et-assistance' element={<Help />} />
                <Route path='/infos-conso' element={<ConsoInfo />} />
                <Route path='/*' element={<NotFound />} />
            </Switch>
        </Router>
    )
}

export default Routes
