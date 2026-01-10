-- Database schema for rental platform with insurance and legal contract features

-- Table for rental listings
CREATE TABLE IF NOT EXISTS rental_listings (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    item_value DECIMAL(10, 2) NOT NULL,
    daily_rate DECIMAL(10, 2) NOT NULL,
    lender_id INTEGER NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    -- Security features
    has_security_service BOOLEAN DEFAULT 0,
    security_service_cost DECIMAL(10, 2) DEFAULT 0.00,
    insurance_coverage BOOLEAN DEFAULT 0,
    requires_legal_contract BOOLEAN DEFAULT 0,
    fair_market_value DECIMAL(10, 2),
    
    -- Status and metadata
    status VARCHAR(50) DEFAULT 'active',
    category VARCHAR(100),
    location VARCHAR(255)
);

-- Table for digital legal contracts
CREATE TABLE IF NOT EXISTS rental_contracts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    listing_id INTEGER NOT NULL,
    renter_id INTEGER NOT NULL,
    lender_id INTEGER NOT NULL,
    contract_text TEXT NOT NULL,
    rental_start_date DATE NOT NULL,
    rental_end_date DATE NOT NULL,
    
    -- Digital signatures
    lender_signature TEXT,
    renter_signature TEXT,
    lender_signed_at TIMESTAMP,
    renter_signed_at TIMESTAMP,
    
    -- Contract status
    status VARCHAR(50) DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    FOREIGN KEY (listing_id) REFERENCES rental_listings(id)
);

-- Table for insurance policies
CREATE TABLE IF NOT EXISTS rental_insurance (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    listing_id INTEGER NOT NULL,
    contract_id INTEGER,
    
    -- Policy details
    coverage_amount DECIMAL(10, 2) NOT NULL,
    premium_amount DECIMAL(10, 2) NOT NULL,
    policy_number VARCHAR(100) UNIQUE,
    
    -- Dates
    policy_start_date DATE NOT NULL,
    policy_end_date DATE NOT NULL,
    
    -- Insurance provider
    provider_name VARCHAR(255) DEFAULT 'Platform Insurance Partner',
    
    -- Status
    status VARCHAR(50) DEFAULT 'active',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    FOREIGN KEY (listing_id) REFERENCES rental_listings(id),
    FOREIGN KEY (contract_id) REFERENCES rental_contracts(id)
);

-- Table for users (lenders and renters)
CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username VARCHAR(100) NOT NULL UNIQUE,
    email VARCHAR(255) NOT NULL UNIQUE,
    full_name VARCHAR(255),
    user_type VARCHAR(50) DEFAULT 'renter', -- 'lender' or 'renter' or 'both'
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    verified BOOLEAN DEFAULT 0
);

-- Index for performance optimization
CREATE INDEX IF NOT EXISTS idx_listings_value ON rental_listings(item_value);
CREATE INDEX IF NOT EXISTS idx_listings_security ON rental_listings(has_security_service);
CREATE INDEX IF NOT EXISTS idx_contracts_status ON rental_contracts(status);
CREATE INDEX IF NOT EXISTS idx_insurance_listing ON rental_insurance(listing_id);

-- View for high-value listings (above $500) that should have security service
CREATE VIEW IF NOT EXISTS high_value_listings AS
SELECT 
    id,
    title,
    item_value,
    has_security_service,
    CASE 
        WHEN item_value > 500 AND has_security_service = 0 THEN 1
        ELSE 0
    END AS should_recommend_security
FROM rental_listings
WHERE status = 'active' AND item_value > 500;
