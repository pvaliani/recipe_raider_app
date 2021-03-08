package com.example.codeclan.server.services;

import java.util.LinkedHashMap;
import java.util.Map;

public class LRUCache<K, V> extends LinkedHashMap<K, V> {

    private static final long serialVersionUID = 1L;
    private int lruSize;

    public LRUCache(int lruSize) {
        super(16, 0.75f, true);
        this.lruSize = lruSize;
    }

    @Override
    protected boolean removeEldestEntry(Map.Entry<K, V> eldest) {
        return size() > lruSize;
    }
}
