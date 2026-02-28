namespace App\Http\Controllers;

use App\Models\Portfolio;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PortfolioController extends Controller
{
    public function index()
    {
        $portfolios = Portfolio::where('status', 'published')
            ->orderBy('year', 'desc')
            ->get();

        return Inertia::render('Portfolio/Index', [
            'portfolios' => $portfolios,
        ]);
    }

    public function show($slug)
    {
        $portfolio = Portfolio::where('slug', $slug)
            ->where('status', 'published')
            ->firstOrFail();

        return Inertia::render('Portfolio/Show', [
            'portfolio' => $portfolio,
        ]);
    }
}
