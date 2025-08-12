---
layout: post
title: "CompTIA Security+ Fundamentals: Core Concepts"
date: 2025-07-29
tags:
  - cybersecurity
  - comptia
  - security+
---

## CompTIA Security+ Fundamentals: Core Concepts

### 1.1 Controls

Cybersecurity controls are safeguards. They prevent, detect, or mitigate security risks.

*   **Technical Controls:** System-based. Examples: OS controls, firewalls, antivirus.
*   **Managerial Controls (Administrative):** Policy-based. Examples: Security policies, standard operating procedures.
*   **Operational Controls:** People-implemented. Examples: Security guards, awareness programs.
*   **Physical Controls:** Access limitation. Examples: Fences, locks, badge readers.

---

### Control Types

Controls function in specific ways:

*   **Preventive:** Blocks incidents. Example: Firewall.
*   **Deterrent:** Discourages intrusion. Example: Warning signs.
*   **Detective:** Identifies and logs attempts. Example: IDS.
*   **Corrective:** Applies after an event. Goal: Minimal downtime.
*   **Compensating:** Alternative control. Used when primary control is absent.
*   **Directive:** Guides compliance.

---

### 1.2 CIA Triad

Also known as AIC Triad. Core security principles.

1.  **Confidentiality:** Authorized access only.
    *   Access controls.
    *   Encryption.
2.  **Integrity:** Data accuracy and completeness.
    *   Hashing.
    *   Digital signatures (encrypted hashes).
    *   Certificates.
    *   Non-repudiation.
3.  **Availability:** Timely access to resources.
    *   Redundancy.
    *   Fault tolerance.
    *   Patching.

---

### 1.2.1 Non-Repudiation

Proof of action. Denial is impossible.

*   **Proof of Integrity:** Data verification. Data remains accurate. Hashes validate data, not origin.
*   **Proof of Origin:** Message source verification. Authentication.
*   **Digital Signature:** Encrypted hash using a private key. Decrypts with a public key.

---

### 1.2.2 AAA Framework

Identity and access management.

*   **Identification:** User claims identity.
*   **Authentication:** Identity verification. CA (Certificate Authority) involved.
*   **Authorization:** Permitted actions. Abstraction (groups) streamlines administration.
*   **Accounting:** User activity tracking.

---

### 1.2.3 Gap Analysis

Evaluates security posture. Compares current state to desired state.

*   ISO/IEC 27001 standard.
*   Assesses people and processes.
*   Identifies weaknesses. Proposes solutions.
*   Generates analysis and report.

---

### 1.2.4 Zero Trust

"Never trust, always verify" model. Assumes no inherent trust.

*   Network planes: Data plane, control plane.
*   Adaptive identity.
*   Threat scope reduction.
*   Policy-driven access control.
*   Security zones.
*   Policy Enforcement Point (PEP).

---

### 1.2.5 Physical Security

Limits physical access.

*   Access control vestibules.
*   CCTV.
*   Security guards.
*   Sensors.
*   Infrared cameras.

---

### 1.2.7 Deception and Disruption

Misleads or disrupts attackers. Gathers intelligence.

*   **Honeypot:** Decoy system. Attracts and traps. Assumed attacker is machine.
*   **Honeynet:** Network of honeypots.
*   **Honey Files:** Decoy files. Detects unauthorized access.
*   **Honeytoken:** Fake credential. Detects unauthorized access.

---

### 1.3 Change Management

Formal process for IT system alterations. Avoids downtime, confusion, errors.

*   Formal process required.
*   Rollback procedures.
*   Clear policies.
*   Change request form: Purpose, scope, schedule, systems/impact, risk.
*   Approval required.
*   End-user acceptance.
*   Ownership defined.
*   Managers/stakeholders impacted.
*   Impact analysis.
*   Risk value.
*   Likelihood of far-reaching impact.
*   Sandbox testing.
*   Backout plan.
*   Maintenance window.
*   Standard Operating Procedure (SOP).

---

### 1.3.1 Technical Change Management

Focuses on technical aspects of change.

*   Allow/deny list.
*   Downtime management.
*   Legacy application considerations.
*   Documentation.
*   Change management protocol.

---

### 1.4 Public Key Infrastructure (PKI)

Framework for secure information exchange via public key cryptography.

*   Includes policies, procedures, hardware, software, people.
*   Manages digital certificates: creation, distribution, management, storage, revocation.

#### Symmetric Encryption

*   Single shared key.

#### Asymmetric Encryption

*   Two mathematically related keys: private and public.
*   Encrypt with public, decrypt with private.
*   Relies on large prime numbers and randomization.
*   **Key Escrow:** Private key copy held by third party.

---

### 1.4.1 Encryption

Converts data to code. Prevents unauthorized access.

*   Disk encryption: BitLocker, VeraCrypt.
*   Key stretching/strengthening: Increases brute-force cost.

---

### 1.4.2 Key Exchange

Secure cryptographic key exchange.

---

### 1.4.3 Encryption Technologies

Hardware and software support for encryption.

*   **Trusted Platform Module (TPM):** Secure cryptoprocessor.
*   **Hardware Security Module (HSM):** Physical key management.
*   **Key Management System (KMS):** Manages key lifecycle.
*   **Secure Enclave:** Isolated processor. Own boot ROM. Monitors boot. Real-time memory encryption. True random number generator.

---

### 1.4.4 Obfuscation

Hides information. Not true security.

*   **Steganography:** Hides in plain sight (e.g., image covertext).
*   **Concealed Writing:** Hidden messages.
*   **Tokenization:** Replaces sensitive data with non-sensitive token.
*   **Near-Field Communication (NFC):** Short-range data transfer.
*   **Data Masking:** Obscures data elements.

---

### 1.4.5 Hashing & Digital Signatures

Ensures integrity and authenticity.

*   **Hashing:** One-way function. Data cannot be recovered. No collisions. MD5 deprecated.
*   **Salted Hashes:** Random string added before hashing. Defeats rainbow tables.

---

### 1.4.6 Blockchain Technology

Distributed ledger.

*   Decentralized database.
*   Shared and synchronized.
*   Each participant has a copy. Ensures transparency and immutability.

---

### 1.4.7 Certificates

Root of trust.

*   **Root of Trust:** Highly trusted authority.
*   **Certificate Authorities (CAs):** Issue and manage certificates.
*   **Key Revocation:** Invalidates certificate before expiration.
*   **Online Certificate Status Protocol (OCSP):** Real-time revocation status.

---

### 2.1 Threat Actors

Identifies who, motivation, capabilities.

*   **Internal/External:** Origin.
*   **Motivation:** Data exfiltration, espionage, service disruption, blackmail, financial gain, beliefs, revenge, disruption, war.

#### Types of Threat Actors:

*   **National States:** External. Massive resources. APTs.
*   **Unskilled Attackers:** Limited knowledge. Internal/external.
*   **Hacktivist:** Philosophical/political motivation. Internal/external. DoS, defacement. Limited funding.
*   **Insider Entities:** Internal. Access to resources. Medium sophistication.
*   **Organized Crime:** External. Financial gain. Highly sophisticated. Ransomware.
*   **Shadow IT:** Works around internal IT. Builds own infrastructure.
*   **Going Rogue:** Acts independently against policy.

---

### 2.2 Common Threat Vectors

Paths for unauthorized access.

*   **Message-Based:** Phishing, SMS (smishing).
*   **File-Based:** Malicious code in files.
*   **Voice Call:** Vishing, war dialing, call tampering, spam over IP.
*   **Removable Device:** Malware via USB.
*   **Vulnerable Software:** Exploits software weaknesses. Client-based, agentless.
*   **Unsupported Systems:** Exploits outdated OS/apps.
*   **Unsecure Network:** Open ports, weak firewall rules, default credentials.
*   **Supply Chain:** Attacks via third-party vendors (MSPs).

---

### 2.2.1 Phishing

Deceptive social engineering.

*   Email phishing.
*   Typosquatting.
*   Pretexting.
*   Vishing (voice).
*   Smishing (SMS).

---

### 2.2.2 Impersonation

*   **Pretext:** Fabricated scenario.

---

### 2.2.3 Watering Hole Attack

Compromises frequently visited website. Infects target group. Layered defense.

---

### 2.2.4 Other Social Engineering Techniques

*   Misinformation/Disinformation.

---

### 2.3 Memory Injections

Injects malicious code into process memory.

*   Malware runs in memory.
*   Memory forensics.
*   DLLs (Dynamic Link Libraries).
*   Threads.
*   Buffers.
*   Management functions.
*   Malware hides in process or becomes new process.

---

### 2.3.1 Buffer Overflows

Writes excess data to fixed-size buffer. Overflows into adjacent memory.

*   Bounds checking.
*   Repeatable.

---

### 2.3.2 Race Conditions

Outcome depends on event timing.

*   **Time-of-Check to Time-of-Use (TOCTOU):** System state changes between check and use.

---

### 2.3.3 Malicious Update

Compromises trusted update mechanisms.

*   Trusted sources.
*   Backups for recovery.

---

### 2.3.4 Operating Systems Security

*   Regular updates.
*   Patch Tuesday (Windows).

---

### 2.3.5 SQL Injection

*   Bad programming.
*   Inserts malicious SQL code into input fields. Executed by database.

---

### 2.3.6 Cross-Site Scripting (XSS)

Exploits trust in legitimate websites.

*   Complex.
*   JavaScript-based.
*   **Non-Persistent (Reflected) XSS:** Script reflected from server. Executed in browser. Not stored.
*   **Persistent (Stored) XSS:** Script stored on server. Delivered to users.

---

### 2.3.7 Hardware Vulnerabilities

Hardware can have vulnerabilities that are difficult to detect/patch.

*   OS access without user access.
*   IoT devices: Weak security, default credentials.
*   Firmware: Vendor-modifiable only.
*   End of Life (EOL)/End of Service Life (EOSL): No security updates.
*   Legacy platforms: Unsupported.

---

### 2.3.8 Virtualization Security

*   **VM Escape Protection:** Prevents VM breakout to host.
*   **Resource Reuse:** Secure management of virtualized resource reuse.

---

### 2.3.9 Cloud-Specific Vulnerabilities

Unique cloud challenges.

*   Authentication bypass.
*   Directory traversal.
*   Remote code execution.
*   Out of bounds write.

---

### 2.3.10 Supply Chain Vulnerabilities

*   Many components from various suppliers.
*   Service providers.
*   Hardware providers.
*   Software providers.

---

### 2.3.11 Misconfiguration Vulnerabilities

*   Open permissions.
*   Unsecured admin accounts.
*   Insecure protocols.
*   Default settings.
*   Open ports and services.

---

### 2.3.12 Mobile Device Vulnerabilities

*   Jailbreaking/rooting: Removes vendor restrictions.
*   Sideloading: Installs apps from unofficial sources.

---

### 2.3.13 Zero-Day Vulnerabilities

*   Unknown to vendor. No patch. Exploitable.

---

### 2.4 Malware

Malicious software. Damages, disrupts, gains unauthorized access.

*   **Ransomware:** Encrypts files. Demands ransom.

---

### 2.4.1 Viruses and Worms

*   **Virus:** Replicates. Moves. Requires user interaction. Fileless virus.
*   **Worm:** Self-replicates. Uses network. No user interaction. Bypasses firewalls.

---

### 2.4.2 Spyware and Bloatware

*   **Spyware:** Secretly gathers user info.
*   **Bloatware:** Unwanted pre-installed software.

---

### 2.4.3 Other Malware Types

*   **Keylogger:** Records keystrokes.
*   **Logic Bomb:** Dormant until condition met.
*   **Rootkit:** Hides presence. Modifies OS components.

---

### 2.4.4 Physical Attacks

*   Brute-force.
*   RFID cloning.
*   Environmental: Power off, HVAC manipulation, fire suppression.

---

### 2.4.5 Denial of Service (DoS)

Forces service failure.

*   **DoS:** Makes resource unavailable. Can be unintentional.
*   **Distributed Denial of Service (DDoS):** Multiple compromised systems (botnet). Overwhelms target. Reflected and amplified.

---

### 2.4.6 DNS Attacks

*   **DNS Spoofing/Poisoning:** Injects false DNS records. Redirects users.
*   **Domain Hijacking:** Unauthorized domain control.
*   **URL Hijacking:** Redirects to malicious URL.
*   **Typosquatting/Brandjacking:** Misspelled domains.

---

### 2.4.7 Wireless Attacks

*   Wireless deauthentication (802.11).
*   RF (Radio Frequency) jamming.
*   Wireless jamming.
*   Fox hunting.

---

### 2.4.8 On-Path Attack (Man-in-the-Middle)

*   **ARP Spoofing/Poisoning:** Redirects network traffic.
*   **On-Path Browser/Man-in-the-Browser:** Intercepts/modifies web traffic in browser.

---

### 2.4.9 Replay Attacks

Captures and retransmits data. Impersonates user/system.

*   Needs raw network data.
*   Pass the hash.
*   Session hijacking (sidejacking).
*   E2E (End-to-End) Encryption: Prevents replay.

---

### 2.4.10 Malicious Code

Performs unauthorized/harmful actions.

---

### 2.4.11 Application Attacks

*   Injection.
*   Replay.
*   Privilege escalation.
*   Cross-Site Request Forgery (CSRF).
*   Client-server codes.
*   Directory traversal.

---

### 2.4.12 Cryptographic Attacks

*   **Hash Collision:** Different inputs, same hash.
*   **Birthday Attack:** Finds hash collisions.
*   **Downgrade Attack:** Forces weaker protocol/algorithm.
*   **SSL Stripping:** Downgrades HTTPS to HTTP.

---

### 2.4.13 Password Attacks

*   Passwords hashed.
*   Spraying attack.
*   Brute-force.

---

### 2.4.14 Indicators of Compromise (IoC)

Event indicating intrusion.

*   Account lockout.
*   Concurrent session usage.

---