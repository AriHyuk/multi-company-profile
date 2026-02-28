<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Cache;

class SiteSetting extends Model
{
    protected $fillable = ['key', 'value'];

    /**
     * Ambil nilai setting berdasarkan key.
     * Cache 1 jam untuk efisiensi — auto-invalidate saat di-update.
     *
     * @param  string  $key
     * @param  string|null  $default
     */
    public static function get(string $key, ?string $default = null): ?string
    {
        return Cache::remember("site_setting:{$key}", 3600, function () use ($key, $default) {
            return static::where('key', $key)->value('value') ?? $default;
        });
    }

    /**
     * Set atau update nilai setting dan invalidate cache-nya.
     */
    public static function set(string $key, ?string $value): void
    {
        static::updateOrCreate(['key' => $key], ['value' => $value]);
        Cache::forget("site_setting:{$key}");
    }
}
