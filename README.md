# Univlop — Preloved Marketplace
> Project Lomba UI/UX

## Struktur Project

```
univlop/
├── frontend-user/       # Pembeli & Penjual (3 orang)
│   ├── public/
│   └── src/
│       ├── assets/      # fonts, icons, images
│       ├── components/
│       │   ├── common/  # komponen reusable
│       │   ├── buyer/   # komponen khusus pembeli
│       │   └── seller/  # komponen khusus penjual
│       ├── pages/
│       │   ├── auth/
│       │   ├── home/
│       │   ├── buyer/   # browse, cart, checkout, orders, wishlist
│       │   └── seller/  # dashboard, products, orders, profile
│       ├── layouts/
│       ├── hooks/
│       ├── services/
│       ├── store/
│       └── utils/
│
└── frontend-admin/      # Admin Panel
    ├── public/
    └── src/
        ├── assets/
        ├── components/
        │   ├── common/
        │   └── dashboard/
        ├── pages/       # auth, dashboard, users, products, orders, reports, settings
        ├── layouts/
        ├── hooks/
        ├── services/
        ├── store/
        └── utils/
```

## Tim
| Role | Scope |
|---|---|
| Frontend User 1 | Pembeli — browse, cart, checkout |
| Frontend User 2 | Pembeli — orders, wishlist & Auth |
| Frontend User 3 | Penjual — dashboard, products, orders, profile |
| Frontend Admin | Admin panel penuh |
