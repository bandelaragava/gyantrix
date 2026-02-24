import React, { useState, useEffect } from 'react';
import './Dashboard.css';
import { getAssetUrl } from '../utils/assets';

const Dashboard = () => {
    const [activeSection, setActiveSection] = useState('home');
    const [leads, setLeads] = useState([]);
    const [stats, setStats] = useState({ total: 0, today: 0 });
    const [loading, setLoading] = useState(true);

    const API_URL = "https://gyantrix-academy-backend-1.onrender.com/api/leads";

    const fetchLeads = async () => {
        try {
            setLoading(true);
            const res = await fetch(API_URL);
            const data = await res.json();
            setLeads(data);

            const today = new Date().toISOString().split("T")[0];
            const todayLeads = data.filter(l => {
                if (!l.createdAt) return false;
                const createdDate = new Date(l.createdAt);
                return !isNaN(createdDate) && createdDate.toISOString().split("T")[0] === today;
            });

            setStats({
                total: data.length,
                today: todayLeads.length
            });
        } catch (err) {
            console.error("Error fetching leads:", err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchLeads();
    }, []);

    const updateStatus = async (id, status) => {
        try {
            await fetch(`${API_URL}/${id}`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ status })
            });
            fetchLeads();
        } catch (err) {
            console.error("Error updating status:", err);
        }
    };

    const formatDate = (dateStr) => {
        if (!dateStr) return "—";
        const d = new Date(dateStr);
        if (isNaN(d)) return "—";
        return d.toLocaleDateString('en-GB'); // DD/MM/YYYY
    };

    const todayLeads = leads.filter(l => {
        if (!l.createdAt) return false;
        const today = new Date().toISOString().split("T")[0];
        const createdDate = new Date(l.createdAt);
        return !isNaN(createdDate) && createdDate.toISOString().split("T")[0] === today;
    });

    return (
        <div className="dashboard-container">
            <div className="sidebar">
                <h2>
                    <img className="sidebar-logo" src={getAssetUrl("/images/gyantrix1.png")} alt="Logo" />
                    Dashboard
                </h2>
                <button
                    className={`sidebar-btn ${activeSection === 'home' ? 'active' : ''}`}
                    onClick={() => setActiveSection('home')}
                >
                    <span>🏠 Home</span>
                    <div className="liquid"></div>
                </button>
                <button
                    className={`sidebar-btn ${activeSection === 'leads' ? 'active' : ''}`}
                    onClick={() => setActiveSection('leads')}
                >
                    <span>📋 Leads</span>
                    <div className="liquid"></div>
                </button>
            </div>

            <div className="dashboard-content">
                {activeSection === 'home' && (
                    <div id="home" className="dashboard-section active">
                        <h1>Dashboard Overview</h1>
                        <div className="stats-grid">
                            <div className="stat-card">
                                <h2>Total Leads</h2>
                                <h1>{stats.total}</h1>
                            </div>
                            <div className="stat-card orange">
                                <h2>Today's Leads</h2>
                                <h1>{stats.today}</h1>
                            </div>
                        </div>

                        <h2 className="section-title">🔁 Recent Follow-ups (Today)</h2>
                        <div className="table-wrapper">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Date</th>
                                        <th>Name</th>
                                        <th>Phone</th>
                                        <th>Email</th>
                                        <th>Source</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {todayLeads.length === 0 ? (
                                        <tr>
                                            <td colSpan="6" className="empty-row">No new leads today</td>
                                        </tr>
                                    ) : (
                                        todayLeads.map(lead => (
                                            <tr key={lead.id || lead._id}>
                                                <td>{formatDate(lead.createdAt)}</td>
                                                <td>{lead.name}</td>
                                                <td>{lead.mobileNumber}</td>
                                                <td>{lead.email}</td>
                                                <td>{lead.source}</td>
                                                <td>{lead.status}</td>
                                            </tr>
                                        ))
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}

                {activeSection === 'leads' && (
                    <div id="leads" className="dashboard-section active">
                        <h1>All Leads</h1>
                        <div className="table-wrapper">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Date</th>
                                        <th>Name</th>
                                        <th>Phone</th>
                                        <th>Email</th>
                                        <th>Source</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {leads.map(lead => (
                                        <tr key={lead.id || lead._id}>
                                            <td>{formatDate(lead.createdAt)}</td>
                                            <td>{lead.name}</td>
                                            <td>{lead.mobileNumber}</td>
                                            <td>{lead.email}</td>
                                            <td>{lead.source}</td>
                                            <td>
                                                <select
                                                    value={lead.status}
                                                    onChange={(e) => updateStatus(lead.id || lead._id, e.target.value)}
                                                >
                                                    <option value="NEW">NEW</option>
                                                    <option value="Contacted">Contacted</option>
                                                    <option value="Closed">Closed</option>
                                                    <option value="Converted">Converted</option>
                                                </select>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Dashboard;
