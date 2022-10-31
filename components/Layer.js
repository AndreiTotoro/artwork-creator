'use client';
import Link from 'next/link';
import React from 'react';

export default function Layer({ name }) {
	return <Link href={`/${name}`}>{name}</Link>;
}
