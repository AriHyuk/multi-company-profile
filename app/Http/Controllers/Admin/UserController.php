<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rule;
use Inertia\Inertia;

class UserController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/User/Index', [
            'users' => User::latest()->paginate(10)
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/User/Form');
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:8|confirmed',
            'role' => 'required|in:admin,editor',
        ]);

        DB::beginTransaction();
        try {
            User::create([
                'name' => $data['name'],
                'email' => $data['email'],
                'password' => Hash::make($data['password']),
                'role' => $data['role'],
            ]);
            DB::commit();
            return redirect()->route('admin.users.index')->with('success', 'User berhasil ditambahkan!');
        } catch (\Exception $e) {
            DB::rollBack();
            Log::error('Gagal simpan user: ' . $e->getMessage());
            return redirect()->back()->withInput()->with('error', 'Gagal menambahkan user. Silakan coba lagi.');
        }
    }

    public function edit(User $user)
    {
        return Inertia::render('Admin/User/Form', [
            'user' => $user
        ]);
    }

    public function update(Request $request, User $user)
    {
        $data = $request->validate([
            'name' => 'required|string|max:255',
            'email' => ['required', 'string', 'email', 'max:255', Rule::unique('users')->ignore($user->id)],
            'password' => 'nullable|string|min:8|confirmed',
            'role' => 'required|in:admin,editor',
        ]);

        $updateData = [
            'name' => $data['name'],
            'email' => $data['email'],
            'role' => $data['role'],
        ];

        if ($data['password']) {
            $updateData['password'] = Hash::make($data['password']);
        }

        DB::beginTransaction();
        try {
            $user->update($updateData);
            DB::commit();
            return redirect()->route('admin.users.index')->with('success', 'User berhasil diperbarui!');
        } catch (\Exception $e) {
            DB::rollBack();
            Log::error('Gagal update user: ' . $e->getMessage());
            return redirect()->back()->withInput()->with('error', 'Gagal memperbarui user. Silakan coba lagi.');
        }
    }

    public function destroy(User $user)
    {
        if ($user->id === auth()->id()) {
            return redirect()->back()->with('error', 'Anda tidak bisa menghapus akun sendiri!');
        }

        DB::beginTransaction();
        try {
            $user->delete();
            DB::commit();
            return redirect()->back()->with('success', 'User berhasil dihapus!');
        } catch (\Exception $e) {
            DB::rollBack();
            Log::error('Gagal hapus user: ' . $e->getMessage());
            return redirect()->back()->with('error', 'Gagal menghapus user.');
        }
    }
}
